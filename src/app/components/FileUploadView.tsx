import { CloudUpload, FileText } from 'lucide-react';

export function FileUploadView() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          File Upload (OCR Pattern)
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Drag and drop upload component for document processing and OCR workflows.
        </p>
      </div>

      {/* Upload Dropzone */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6 mb-6">
        <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg p-12 text-center hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors cursor-pointer">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4">
              <CloudUpload className="w-8 h-8 text-zinc-600 dark:text-zinc-400" />
            </div>
            <div className="mb-2">
              <button className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-zinc-50 underline">
                Upload a file
              </button>
              <span className="text-sm text-zinc-500 dark:text-zinc-400"> or drag and drop</span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              PNG, JPG, PDF up to 10MB
            </p>
          </div>
        </div>
      </div>

      {/* File List Example */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
          Uploaded Files
        </h3>
        <div className="space-y-3">
          {[
            { name: 'invoice_2024_001.pdf', size: '2.4 MB', status: 'Processing' },
            { name: 'receipt_scanner_output.jpg', size: '1.8 MB', status: 'Complete' },
            { name: 'document_scan.png', size: '3.2 MB', status: 'Complete' },
          ].map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800 rounded-md border border-zinc-200 dark:border-zinc-700"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-200 dark:bg-zinc-700 rounded flex items-center justify-center">
                  <FileText className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {file.name}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    {file.size}
                  </div>
                </div>
              </div>
              <div>
                {file.status === 'Processing' ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300">
                    Processing
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
                    Complete
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Upload Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            OCR Settings
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200"
                defaultChecked
              />
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                Auto-detect language
              </span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200"
                defaultChecked
              />
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                Extract tables
              </span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200"
              />
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                High accuracy mode
              </span>
            </label>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            Output Format
          </h3>
          <div className="space-y-2">
            {['JSON', 'CSV', 'XML', 'Plain Text'].map((format) => (
              <label key={format} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="format"
                  className="w-4 h-4 border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200"
                  defaultChecked={format === 'JSON'}
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  {format}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
