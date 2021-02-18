import { colors } from './colors';

export default {
    space: {
        none: 0,
        gutter: 24,
        xxsmall: 4,
        xsmall: 8,
        small: 12,
        medium: 20,
        large: 32,
        xlarge: 48,
        xxlarge: 96,
        xxxlarge: 128
    },
    sizes: [8, 16, 32, 64, 128, 256, 512, 768, 1024, 1420],
    breakpoints: ['40em', '56em', '64em'],
    fonts: {
        body:
            '-apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
        heading: 'Cambon, sans-serif',
        monospace: 'Circular Mono, monospace'
    },
    fontSizes: [10, 11, 12, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
        body: 300,
        medium: 500,
        heading: 700,
        bold: 700
    },
    lineHeights: {
        body: 1.4,
        heading: 1.2
    },
    shadows: {
        default: '0 10px 10px 0 rgba(0, 0, 0, 0.15)'
    },
    radii: {
        default: '0.25rem',
        sm: '0.2rem',
        lg: '0.3rem',
        pill: '50rem'
    },
    typeStyles: {
        heading: {
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
            mt: 0,
            mb: 2
        },
        display: {
            fontWeight: 'display',
            lineHeight: 'heading'
        }
    },
    colors: { ...colors },
    layout: {
        titlebar: {
            color: 'text',
            backgroundColor: 'control.background',
            width: '100%',
            height: '48px',
            fontWeight: 'bold',
            lineHeight: '1.6',
            height: 44,
            width: '100',
            boxShadow: 'sm',
            p: 2,
            pl: '80px',
            overflow: 'hidden',
            alignItems: 'center',
            display: 'flex'
        },
        header: {
            color: 'white',
            backgroundColor: 'black'
        },
        main: {
            textAlign: 'center',
            color: 'text',
            backgroundColor: 'background',
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            flexDirection: 'column',
        },
        breadcrumb: {
            p: 4,
            fontSize: '14px',
            fontWeight: '600',
            backgroundColor: 'control.background'
        },
        footer: {
            color: 'white',
            backgroundColor: 'black'
        }
    },
    text: {
        default: {
            color: colors.twitter,
            fontSize: 2,
            fontFamily: 'body'
        },
        heading: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading'
        }
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
            overflow: 'hidden'
        },
        h1: {
            variant: 'text.heading',
            fontSize: 6
        },
        h2: {
            variant: 'text.heading',
            fontSize: 4
        },
        h3: {
            variant: 'text.heading',
            fontSize: 3,
            fontWeight: 'medium',
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'pink'
            }
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit'
        },
        button: {
          fontFamily: 'body',
          lineHeight: 'body',
          fontWeight: 'body',
        },
    }
};
