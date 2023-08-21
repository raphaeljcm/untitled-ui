import { ChangeEvent, ComponentProps } from 'react';
import { useFileInput } from 'src/hooks/useFileInput';

type FileInputControlProps = ComponentProps<'input'>;

export function FileInputControl({
  multiple = false,
  ...rest
}: FileInputControlProps) {
  const { id, onFileSelected } = useFileInput();

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return;

    const files = Array.from(event.target.files);

    onFileSelected(files, multiple);
  }

  return (
    <input
      type="file"
      accept="image/*"
      className="sr-only"
      id={id}
      multiple={multiple}
      onChange={handleFileSelected}
      {...rest}
    />
  );
}
