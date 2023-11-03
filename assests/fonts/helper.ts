interface fontProps {
  baseString?: string;
  weight?: string;
}
export const getFontFamily = ({baseString = 'Inter', weight}: fontProps) => {
  switch (weight) {
    case '100':
      return `${baseString}-Thin`;
    case '200':
      return `${baseString}-ExtraLight`;
    case '300':
      return `${baseString}-Light`;
    case 'normal':
    case '400':
      return `${baseString}-Regular`;
    case '500':
      return `${baseString}-Medium`;
    case '600':
      return `${baseString}-SemiBold`;
    case 'bold':
    case '700':
      return `${baseString}-Bold`;
    case '800':
      return `${baseString}-ExtraBold`;
    case '900':
      return `${baseString}-Black`;
  }
};
