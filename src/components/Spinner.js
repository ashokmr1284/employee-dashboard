import * as React from 'react';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { IStackProps, Stack } from 'office-ui-fabric-react/lib/Stack';

export const SpinnerBasicExample: React.StatelessComponent = () => {
  // This is just for laying out the label and spinner (spinners don't have to be inside a Stack)
  const rowProps: IStackProps = { horizontal: true, verticalAlign: 'center' };

  const tokens = {
    sectionStack: {
      childrenGap: 10
    },
    spinnerStack: {
      childrenGap: 20
    }
  };

  return (
    <Stack tokens={tokens.sectionStack}>
      <Stack {...rowProps} tokens={tokens.spinnerStack}>
        <Spinner size={SpinnerSize.large} style={{textAlign:'center', display: 'block'}} />
        <Label style={{textAlign:'center', display: 'block'}}>Loading</Label>
      </Stack>
    </Stack>
  );
};