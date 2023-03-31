import React, { FC, useRef, useEffect, useState } from 'react'
import { Field, ErrorMessage } from 'formik'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

type Props = {
  stepper?: any,
}

const Step3: FC<Props> = ({ stepper }) => {
  const playerRef = useRef<Player | null>(null)
  const [c, setc] = useState(0)
  const [random, setRandom] = useState(Math.random())
  const loadLottie = () => {
    setRandom(Math.random())
    setc(c + 1)
  }

  const doSomething = () => {
    console.log('load')
    playerRef.current ?.play(); // make use of the player and call methods
  }


  useEffect(() => {
    if (!playerRef.current) {
      return
    }
    loadLottie()
  }, [])
  return (
    <div className='w-100'>
      <div className='pb-1 pb-lg-1'>

      </div>

      <div className='fv-row text-center' >
        <h1 className='fw-bolder text-primary'>Good Luck!</h1>

        <div className='text-gray-900 fw-bold fs-6'>
          Your application is on the way.
        </div>
        <Player
          ref={playerRef}
          src="https://assets10.lottiefiles.com/private_files/lf30_o0calpsv.json"
          style={{  width: '300px' }}
          speed={1}
          autoplay={true}
          onEvent={event => {
            if (event === 'load') doSomething(); // check event type and do something
          }}
          keepLastFrame={true}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      </div>
    </div>
  )
}

export { Step3 }
