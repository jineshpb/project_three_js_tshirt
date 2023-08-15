import React from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'


const Backdrop = () => {
    const shadows = useRef()
  return (
    <AccumulativeShadows
        ref={ shadows }
        temporal
        position={[0, 0, -0.14]}
        frames={ 60 }
        alphaTest={ 0.85 }
        scale={ 10 }
        rotation={[Math.PI/2, 0 ,0]}
    >
        <RandomizedLight
            amount={10}
            radius={ 9 }
            intensity={ 2 }
            ambient={ 0.25 }
            position={ [3, 8, -7]}
        >
        </RandomizedLight>
        <RandomizedLight
            amount={1}
            radius={ 5 }
            intensity={ 0.25 }
            ambient={ 0.55 }
            position={ [-5, 5, -9]}
        >

        </RandomizedLight>
    </AccumulativeShadows>
  )
}

export default Backdrop
