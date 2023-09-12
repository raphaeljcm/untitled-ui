import { useState } from 'react';
import * as Select from 'src/components/Form/Select';
import { COUNTRIES } from 'src/consts/countries';
import Flag from 'react-world-flags';

type CountryCode = keyof typeof COUNTRIES;

export function CountrySelect() {
  const [value, setValue] = useState<CountryCode | undefined>(undefined);

  function handleCountrySelected(value: string) {
    setValue(value as CountryCode);
  }

  return (
    <Select.Root
      name="country"
      value={value}
      onValueChange={handleCountrySelected}
    >
      <Select.Trigger>
        <Select.Value placeholder="Select your country...">
          {value && (
            <>
              <Flag
                className="h-5 w-5 rounded-full object-cover object-center"
                code={value}
              />
              {COUNTRIES[value]}
            </>
          )}
        </Select.Value>
      </Select.Trigger>

      <Select.Content>
        {Object.entries(COUNTRIES).map(([code, title]) => {
          return (
            <Select.Item key={code} value={code}>
              <Select.ItemPrefix>
                <Flag
                  className="h-5 w-5 rounded-full object-cover object-center"
                  code={code}
                />
              </Select.ItemPrefix>
              <Select.ItemText>{title}</Select.ItemText>
            </Select.Item>
          );
        })}
      </Select.Content>
    </Select.Root>
  );
}
