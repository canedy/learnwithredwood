interface Props {
  alt: string
  src: string
}

const Poster = ({ alt, src }: Props) => {
  return (
    <div>
      <img
        className="h-60 w-40 rounded-2xl object-cover drop-shadow-poster"
        src={src}
        alt={alt}
      />
    </div>
  )
}

export { Poster }
