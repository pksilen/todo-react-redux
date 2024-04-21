import { create } from 'zustand';
import { createTheme } from '@mui/material/styles';

const initialTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    body1: {
      fontSize: '16px',
      fontWeight: 300
    },
    fontFamily: ['Neue Haas Grotesk Text', 'sans-serif'].join(','),
    h2: {
      fontWeight: 500,
      letterSpacing: '-0.25rem'
    }
  }
});

export type ViewType = 'list' | 'table';

interface State {
  theme: typeof initialTheme;
  viewType: ViewType;
}

interface Actions {
  switchToDarkMode: () => void;
  switchToLightMode: () => void;
  switchToTodosListView: () => void;
  switchToTodosTableView: () => void;
}

type ViewControlsStore = State & { actions: Actions };

const useViewControlsStore = create<ViewControlsStore>()((setState) => ({
  theme: initialTheme,
  viewType: 'list',

  actions: {
    switchToDarkMode: () =>
      setState((store) => ({
        theme: createTheme({
          palette: { mode: 'dark' },
          typography: initialTheme.typography
        })
      })),

    switchToLightMode: () =>
      setState((store) => ({
        theme: createTheme({
          palette: { mode: 'light' },
          typography: initialTheme.typography
        })
      })),

    switchToTodosListView: () => setState((store) => ({ viewType: 'list' })),
    switchToTodosTableView: () => setState((store) => ({ viewType: 'table' }))
  }
}));

export default useViewControlsStore;