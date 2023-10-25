import { RefAttributes } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import useTheme from '@theme/hooks/useTheme';

import Grid, { GridProps } from '.';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid
};

export default meta;
type Story = StoryObj<typeof Grid>;

function GridWithHooks(args: GridProps & RefAttributes<HTMLDivElement>) {
  const {
    theme: {
      palette: { box }
    }
  } = useTheme();

  const style = {
    padding: 10,
    backgroundColor: box.filled.normal
  };

  return (
    <>
      <Grid {...args} container>
        <Grid item xs={2} style={style}>
          Xs 2
        </Grid>
        <Grid item xs={2} style={style}>
          Xs 2
        </Grid>
        <Grid item xs={1} style={style}>
          Xs 1
        </Grid>
      </Grid>
      <br />
      <Grid {...args} container>
        <Grid item xs={2} style={style}>
          Xs 2
        </Grid>
        <Grid item xs={2} smHidden style={style}>
          Xs 2 (Sm Hidden)
        </Grid>
      </Grid>
    </>
  );
}

export const Default: Story = {
  render: (args) => <GridWithHooks {...args} />
};
