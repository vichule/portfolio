interface Size {
    sm: string
    md: string
    lg: string
    xl: string
  }
  
  const size: Size = {
    sm: '600px', // mobile 
    md: '900px', // tablets
    lg: '1280px', // laptops
    xl: '1440px', // desktop
  }
  
  export const device = {
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
  }