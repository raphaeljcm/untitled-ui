import { User } from 'lucide-react';
import { useMemo } from 'react';
import { useFileInput } from 'src/hooks/useFileInput';

export function FileInputImagePreview() {
  const { files } = useFileInput();

  const previewURL = useMemo(() => {
    if (files.length === 0) return null;

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (!previewURL)
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    );

  return (
    <img
      src={previewURL}
      alt="profile"
      className="h-16 w-16 rounded-full object-cover"
    />
  );
}
