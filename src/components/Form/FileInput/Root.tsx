import { ComponentProps, createContext, useId, useState } from 'react';

type FileInputRootProps = ComponentProps<'div'>;

type FileInputContextType = {
  id: string;
  files: File[];
  onFileSelected: (files: File[], multiple: boolean) => void;
  onFileRemoved: (file: File) => void;
};

export const FileInputContext = createContext({} as FileInputContextType);

export function FileInputRoot(props: FileInputRootProps) {
  const [files, setFiles] = useState<File[]>([]);
  const id = useId();

  function handleSelectedFiles(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles(prev => [...prev, ...files]);
    } else {
      setFiles(files);
    }
  }

  function handleRemoveFile(file: File) {
    setFiles(prev => prev.filter(f => f.name !== file.name));
  }

  return (
    <FileInputContext.Provider
      value={{
        id,
        files,
        onFileSelected: handleSelectedFiles,
        onFileRemoved: handleRemoveFile,
      }}
    >
      <div className="relative" {...props} />
    </FileInputContext.Provider>
  );
}
