import { ComponentProps, createContext, useId, useState } from 'react';

type FileInputRootProps = ComponentProps<'div'>;

type FileInputContextType = {
  id: string;
  files: File[];
  onFileSelected: (files: File[]) => void;
};

export const FileInputContext = createContext({} as FileInputContextType);

export function FileInputRoot(props: FileInputRootProps) {
  const [files, setFiles] = useState<File[]>([]);
  const id = useId();

  return (
    <FileInputContext.Provider value={{ id, files, onFileSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
}
