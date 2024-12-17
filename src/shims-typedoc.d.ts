// shim for typedoc - they do have types but they are too complex for the compiler to use type inference so just
// defining what is required here as an alternative.
declare module 'typedoc' {
  export type DeclarationReflection = {
    name: string;
    children?: DeclarationReflection[];
    comment?: Comment;
    flags: ReflectionFlags;
    type?: SomeType;
    signatures?: SignatureReflection[];
    defaultValue?: any;
    parameters?: DeclarationReflection[];
  };

  export type Comment = {
    summary: CommentDisplayPart[];
    blockTags: BlockTag[];
  };

  export type BlockTag = {
    tag: string;
    content: any;
  };

  export type CommentDisplayPart = {
    text: string;
  };

  export type ReflectionFlags = {
    isStatic: boolean;
    isReadonly: boolean;
    isPublic: boolean;
    isOptional: boolean;
  };

  export type SomeType = {
    type: string;
    declaration: DeclarationReflection;
    name: string;
    types: SomeType[];
    typeArguments: SomeType[];
    value: any;
    elementType?: SomeType;
  };
}
