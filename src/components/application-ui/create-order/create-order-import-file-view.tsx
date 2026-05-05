import { useState } from 'react';
import { Button } from '../button';
import { DialogDescription, DialogHeader, DialogTitle } from '../../overlays/dialog';
import { ArrowLeft } from 'lucide-react';
import { OrderFileDropzone } from './order-file-dropzone';

export interface CreateOrderImportFileViewProps {
  onBack: () => void;
  onContinue: (file: File) => void;
}

export function CreateOrderImportFileView({
  onBack,
  onContinue,
}: CreateOrderImportFileViewProps): React.ReactElement {
  const [file, setFile] = useState<File | null>(null);

  return (
    <>
      <DialogHeader>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="shrink-0 cursor-pointer text-foreground"
              onClick={onBack}
              aria-label="Back"
            >
              <ArrowLeft className="size-4" />
            </Button>
            <DialogTitle className="text-foreground">Import Order From File</DialogTitle>
          </div>
        </div>
        <DialogDescription>
          Upload a PDF, CSV, or Excel file to auto-generate your order.
        </DialogDescription>
      </DialogHeader>
      <div className="mt-4 space-y-4">
        <OrderFileDropzone value={file} onChange={setFile} />
        {file && (
          <Button
            type="button"
            variant="default"
            className="w-full cursor-pointer"
            onClick={() => onContinue(file)}
          >
            Continue
          </Button>
        )}
      </div>
    </>
  );
}
