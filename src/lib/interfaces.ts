export interface Response<T> {
  data: Data<T>;
  meta: Meta;
}

export interface Meta {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

export interface Data<T> {
  id: number;
  attributes: T[];
}

export interface Attribute {
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface Post extends Attribute {
  author: string;
  content: string;
  title: string;
  summary: string;
  cover: {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: null;
        caption: null;
        width: number;
        height: number;
        formats: {
          thumbnail: Format;
          medium: Format;
          small: Format;
          large: Format;
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewURL: null;
        provider: string;
        providerMetadata: null;
        createdAt: Date;
        updatedAt: Date;
      };
    };
  };
}

interface Format {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}
