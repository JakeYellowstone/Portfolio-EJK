import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Database, Cpu, Binary } from 'lucide-react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initialisation');

  const loadingStages = [
    { progress: 0, text: 'Initialisation des systèmes...' },
    { progress: 20, text: 'Chargement des modules de sécurité...' },
    { progress: 40, text: 'Vérification des protocoles GRC...' },
    { progress: 60, text: 'Activation des modèles IA...' },
    { progress: 80, text: 'Finalisation du chargement...' },
    { progress: 95, text: 'Prêt à démarrer...' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return prev + 1;
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentStage = [...loadingStages].reverse().find(stage => progress >= stage.progress);
    if (currentStage) {
      setLoadingText(currentStage.text);
    }
  }, [progress]);

  const orbitIcons = [
    { Icon: Shield, delay: 0, duration: 8 },
    { Icon: Lock, delay: 1, duration: 10 },
    { Icon: Database, delay: 2, duration: 9 },
    { Icon: Cpu, delay: 3, duration: 11 },
  ];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-[#0A0F1C] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 230, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 230, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }} />
          </div>

          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(0, 230, 255, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(123, 92, 255, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(0, 230, 255, 0.05) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative flex items-center justify-center">
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute rounded-full"
                style={{
                  width: `${ring * 120 + 80}px`,
                  height: `${ring * 120 + 80}px`,
                  border: '1px solid',
                  borderColor: ring % 2 === 0 ? 'rgba(0, 230, 255, 0.1)' : 'rgba(123, 92, 255, 0.1)',
                }}
                animate={{
                  rotate: ring % 2 === 0 ? 360 : -360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20 + ring * 5,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  scale: {
                    duration: 3 + ring,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              >
                <motion.div
                  className="absolute top-0 left-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full"
                  style={{
                    background: ring % 2 === 0
                      ? 'radial-gradient(circle, rgba(0, 230, 255, 0.8), transparent)'
                      : 'radial-gradient(circle, rgba(123, 92, 255, 0.8), transparent)',
                    boxShadow: ring % 2 === 0
                      ? '0 0 10px rgba(0, 230, 255, 0.6)'
                      : '0 0 10px rgba(123, 92, 255, 0.6)',
                  }}
                />
              </motion.div>
            ))}

            {orbitIcons.map(({ Icon, delay, duration }, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  width: '240px',
                  height: '240px',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: delay,
                }}
              >
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: delay * 0.5,
                  }}
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                </motion.div>
              </motion.div>
            ))}

            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                delay: 0.2,
              }}
              className="relative z-10"
            >
              <motion.div
                className="relative w-32 h-32 rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 230, 255, 0.1), transparent)',
                }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 230, 255, 0.3), inset 0 0 20px rgba(0, 230, 255, 0.1)',
                    '0 0 40px rgba(0, 230, 255, 0.5), inset 0 0 30px rgba(0, 230, 255, 0.2)',
                    '0 0 20px rgba(0, 230, 255, 0.3), inset 0 0 20px rgba(0, 230, 255, 0.1)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Shield className="w-16 h-16 text-cyan-400" strokeWidth={1.5} />
                </motion.div>

                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '2px solid rgba(0, 230, 255, 0.3)',
                  }}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                  }}
                >
                  <div className="absolute top-0 left-1/2 w-1 h-1 -ml-0.5 -mt-0.5 rounded-full bg-cyan-400" style={{
                    boxShadow: '0 0 10px rgba(0, 230, 255, 1)',
                  }} />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -inset-24 rounded-full opacity-20"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                background: 'radial-gradient(circle, rgba(0, 230, 255, 0.2) 0%, transparent 70%)',
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 w-full max-w-xl px-8"
          >
            <motion.div
              className="mb-6 text-center"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-cyan-400 text-sm font-mono tracking-wider">
                {loadingText}
              </p>
            </motion.div>

            <div className="relative h-2 bg-gray-900/50 rounded-full overflow-hidden backdrop-blur-sm border border-cyan-400/20">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  boxShadow: '0 0 20px rgba(0, 230, 255, 0.5)',
                }}
              />

              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  width: '100px',
                }}
                animate={{
                  x: ['-100px', '500px'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>

            <div className="flex justify-between items-center mt-4">
              <motion.div
                className="flex items-center gap-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Binary className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-gray-400">SYSTEM CHECK</span>
              </motion.div>

              <motion.span
                className="text-xl font-bold font-mono text-cyan-400"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(0, 230, 255, 0.5)',
                    '0 0 20px rgba(0, 230, 255, 0.8)',
                    '0 0 10px rgba(0, 230, 255, 0.5)',
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {progress}%
              </motion.span>
            </div>

            <motion.div
              className="flex justify-center gap-2 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-cyan-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  style={{
                    boxShadow: '0 0 10px rgba(0, 230, 255, 0.8)',
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
