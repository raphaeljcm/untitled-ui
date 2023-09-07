import { Button } from '@/Button';
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react';
import { useFileInput } from 'src/hooks/useFileInput';
import { formatBytes } from 'src/utils/formatBytes';
import { tv, VariantProps } from 'tailwind-variants';

interface FileInputItemProps extends VariantProps<typeof fileItem> {
  file: File;
}

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500',
    deleteButton: '',
  },
  variants: {
    state: {
      progress: {
        container: 'dark:border-zinc-700',
      },
      completed: {
        container: 'border-violet-500 dark:border-violet-300/30',
      },
      error: {
        container:
          'bg-error-25 border-error-300 dark:bg-error-500/5 dark:border-error-500/30',
        icon: 'border-error-50 bg-error-100 text-error-600 dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-400',
        deleteButton:
          'text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300',
      },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
});

export function FileInputItem({ file, state, ...rest }: FileInputItemProps) {
  const { onFileRemoved, id } = useFileInput();
  const { container, icon, deleteButton } = fileItem({ state });

  const handleRemoveFile = (file: File) => onFileRemoved(file);

  return (
    <div className={container()} {...rest}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-error-700 dark:text-error-400">
              Upload failed, please try again.
            </span>
            <span className="text-sm text-error-600 dark:text-error-500">
              {file.name}
            </span>
          </div>

          <button
            className="group rounded-lg text-sm font-semibold text-error-700 outline-none hover:text-error-900 focus-visible:border-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-4 dark:text-error-400 dark:hover:text-error-300"
            type="button"
          >
            <label
              htmlFor={id}
              className="cursor-pointer group-hover:cursor-pointer"
            >
              Try again
            </label>
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              {file.name}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {formatBytes(file.size)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <progress
              className="h-2 flex-1 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-zinc-100 dark:[&::-webkit-progress-bar]:bg-zinc-600 [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-violet-600 dark:[&::-webkit-progress-value]:bg-violet-400"
              value={state === 'completed' ? '100' : '80'}
              max="100"
            />
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {state === 'completed' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'completed' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button
          type="button"
          variant="ghost"
          className={deleteButton()}
          onClick={() => handleRemoveFile(file)}
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
