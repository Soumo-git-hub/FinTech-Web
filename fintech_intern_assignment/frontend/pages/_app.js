import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
          exit: {
            opacity: 0,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp 