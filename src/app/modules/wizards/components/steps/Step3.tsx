import React, { FC, useRef, useEffect, useState } from 'react'
import { Field, ErrorMessage } from 'formik'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

type Props = {
  stepper?: any,
}

const Step3: FC<Props> = ({ stepper }) => {
  const playerRef = useRef<Player | null>(null)
  const [random, setRandom] = useState(Math.random())
  const loadLottie = () => {
    setRandom(Math.random())
    playerRef.current ?.play();
  }
  useEffect(() => {
    if (!playerRef.current) {
      return
    }
    loadLottie()
  }, [])
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>Good Luck</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          Your application is on the way.
        </div>
      </div>

      <div className='fv-row mb-10'>
        <Player
          ref={playerRef}
          src="https://assets9.lottiefiles.com/packages/lf20_a1EoSR.json"
          style={{ height: '200px', width: '200px' }}
          speed={1}
          keepLastFrame={true}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      </div>
    </div>
  )
}

export { Step3 }
