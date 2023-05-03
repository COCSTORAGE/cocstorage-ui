import type { Meta } from '@storybook/react';

import useTheme from '@theme/provider/useTheme';

import Grid from '.';

export default {
  title: 'Experiment/Grid',
  component: Grid,
  argTypes: {
    container: {
      control: false
    },
    item: {
      control: false
    },
    columnGap: {
      control: false
    },
    rowGap: {
      control: false
    },
    auto: {
      control: false
    },
    xs: {
      control: false
    },
    sm: {
      control: false
    },
    md: {
      control: false
    },
    lg: {
      control: false
    },
    xl: {
      control: false
    },
    xsHidden: {
      control: false
    },
    smHidden: {
      control: false
    },
    mdHidden: {
      control: false
    },
    lgHidden: {
      control: false
    },
    xlHidden: {
      control: false
    }
  }
} as Meta<typeof Grid>;

const Template = function Template(args) {
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
      <Grid {...args}>
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
      <Grid {...args}>
        <Grid item xs={2} style={style}>
          Xs 2
        </Grid>
        <Grid item xs={2} smHidden style={style}>
          Xs 2 (Sm Hidden)
        </Grid>
      </Grid>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  container: true
};
