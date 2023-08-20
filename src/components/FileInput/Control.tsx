import { ChangeEvent, ComponentProps } from 'react';
import { useFileInput } from 'src/hooks/useFileInput';

type FileInputControlProps = ComponentProps<'input'>;

export function FileInputControl(props: FileInputControlProps) {
  const { id, onFileSelected } = useFileInput();

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return;

    const files = Array.from(event.target.files);

    onFileSelected(files);
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFileSelected}
      {...props}
    />
  );
}
