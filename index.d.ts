import type React from 'react';

declare module 'react-modal-image' {
  export interface ModalImageProps {
    className?: string;
    alt?: string;
    small: string;
    smallSrcSet?: string;
    medium?: string;
    large?: string;
    hideDownload?: boolean;
    hideZoom?: boolean;
    showRotate?: boolean;
    imageBackgroundColor?: string;
  }

  export default class ModalImage extends React.Component<ModalImageProps, {}> {}
  export class Lightbox extends React.Component<ModalImageProps & { onClose: () => void }, {}> {}
}
