import { useFileInput } from 'src/hooks/useFileInput';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { FileInputItem } from './FileItem';

export function FileInputList() {
  const { files } = useFileInput();
  const [parent] = useAutoAnimate();

  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map(file => (
        <FileInputItem key={file.name} file={file} state="error" />
      ))}
    </div>
  );
}
