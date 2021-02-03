export type ElectronFile = File & { path?: string }

export type InputFilesType = {
  video?: FileWithMetadata[]
  audio?: FileWithMetadata[]
  image?: FileWithMetadata[]
  other?: FileWithMetadata[]
}

export type FileString = {
  name: string
  path: string
}

export type FileNameTypes = {
  video?: Array<FileString>
  audio?: Array<FileString>
  image?: Array<FileString>
  other?: Array<FileString>
}

export type FileTypes = keyof InputFilesType

export type FileTransformType = {
  state: 'Move' | 'Insert' | 'Delete'
  position?: number
  fileObj?: FileWithMetadata
  type: FileTypes
  secondPosition?: number
}

export type FileWithMetadata = {
  file: ElectronFile
  preview: string
  customType: 'video' | 'audio' | 'image' | 'other'
  videoMetadata?: {
    height: number
    width: number
    duration: number
    otherMetadata: any
  }
  path?: string
}

/**
 * DndKit requires its items to be identified by a unique ID.
 *
 * This interface wraps FileWithMetadata with a uuid for use
 * with DnD kit.
 */
export type WrappedFileWithMetadata = {
  uuid: string
  fileWithMetadata: FileWithMetadata
}

export type FileConfigType = {
  primaryType: FileTypes | string
  types: Array<{
    name: FileTypes | string
    number: { min: number; max: number }
  }>
}

export type CustomFileType = {
  name: string
  type: FileTypes
  path: string
}
