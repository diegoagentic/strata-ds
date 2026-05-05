'use client';

import * as React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '../application-ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './dialog';

export interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmLabel: string;
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel,
}: ConfirmDialogProps): React.ReactElement {
  const handleConfirm = (): void => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="max-w-md !bg-card">
        <DialogHeader className="flex flex-row items-center gap-4 text-left">
          <div
            className="flex shrink-0 items-center justify-center rounded-full bg-destructive/30 p-4"
            aria-hidden
          >
            <AlertTriangle className="size-5 text-destructive" aria-hidden />
          </div>
          <DialogTitle className="text-lg font-semibold leading-6 text-foreground">
            {title}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-sm text-muted-foreground">
          {description}
        </DialogDescription>
        <DialogFooter className="flex flex-row justify-end gap-3 sm:justify-end">
          <Button variant="secondary" onClick={onClose} className="cursor-pointer">
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleConfirm} className="cursor-pointer">
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
