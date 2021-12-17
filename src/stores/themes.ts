const colors = {
  base01: '#F2F4F8',
  base02: '#D1D4D8',
  base03: '#81858B',
  base04: '#616161',
  base05: '#3A3A3A',
  base06: '#252628',
  base07: '#1B1C1E',
  white: '#FFFFFF',
  green: '#1DDB3C',
  blue: '#007BB5',
}

export interface Theme {
  app: {
    background: string;
  }
  header: {
    logo: {
      color: string;
    }
    connectButton: {
      backgroundColor: string
      color: string
      hover: {
        backgroundColor: string
      }
    },
    walletInfo: {
      backgroundColor: string
      color: string,
      balance: {
        backgroundColor: string
        color: string
      }
    },
    themeButton: {
      backgroundColor: string
      color: string
      hover: {
        backgroundColor: string
      }
    }
  }
}

export const darkTheme: Theme = {
  app: {
    background: 'linear-gradient(115.04deg, #501882 -9.96%, #000000 46.01%, #0C637E 100.24%)'
  },
  header: {
    logo: {
      color: colors.white
    },
    connectButton: {
      backgroundColor: colors.base06,
      color: colors.white,
      hover: {
        backgroundColor: colors.base07
      }
    },
    walletInfo: {
      backgroundColor: colors.base07,
      color: colors.white,
      balance: {
        backgroundColor: colors.base05,
        color: colors.white
      }
    },
    themeButton: {
      backgroundColor: colors.base06,
      color: colors.white,
      hover: {
        backgroundColor: colors.base07
      }
    }
  }
}
