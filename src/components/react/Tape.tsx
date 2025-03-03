import "./Tape.css";


export const Tape = ({ color = 'white', index }) => {
  const whiteImages = [
    '/images/hc/masking-tape-1.png',
    '/images/hc/masking-tape-2.png',
    '/images/hc/masking-tape-3.png',
  ]

  let tapeImage

  switch (color) {
    case 'white':
      tapeImage = whiteImages[index % whiteImages.length]
      break
    default:
      tapeImage = whiteImages[index % whiteImages.length]
      break
  }





  return (
    <div className="tape">
      <img src={tapeImage} alt="" />
    </div>
  )
}
