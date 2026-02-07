"use client"

import * as React from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { X } from "lucide-react"

interface BottomSheetContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const BottomSheetContext = React.createContext<BottomSheetContextType | undefined>(undefined)

interface BottomSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

const BottomSheet: React.FC<BottomSheetProps> = ({ open, onOpenChange, children }) => {
  return (
    <BottomSheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </BottomSheetContext.Provider>
  )
}

interface BottomSheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean
  snapPoints?: number[]
}

const BottomSheetContent = React.forwardRef<HTMLDivElement, BottomSheetContentProps>(
  ({ className, children, showCloseButton = true, snapPoints, ...props }, ref) => {
    const context = React.useContext(BottomSheetContext)
    const [isDragging, setIsDragging] = React.useState(false)

    if (!context) {
      console.warn("BottomSheetContent must be used within a BottomSheet component")
      return null
    }

    const { open, onOpenChange } = context

    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "unset"
      }

      return () => {
        document.body.style.overflow = "unset"
      }
    }, [open])

    const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      setIsDragging(false)
      // Close if dragged down more than 100px or velocity is high enough
      if (info.offset.y > 100 || info.velocity.y > 500) {
        onOpenChange(false)
      }
    }

    return (
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => onOpenChange(false)}
            />

            {/* Bottom Sheet */}
            <motion.div
              ref={ref}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300
              }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl ${
                className || ""
              }`}
              style={{
                maxHeight: "85vh",
                touchAction: "none"
              }}
              {...props}
            >
              {/* Drag Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
              </div>

              {/* Close Button (optional) */}
              {showCloseButton && (
                <button
                  onClick={() => onOpenChange(false)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              )}

              {/* Content */}
              <div className="overflow-y-auto px-6 pb-6" style={{ maxHeight: "calc(85vh - 40px)" }}>
                {children}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    )
  }
)

BottomSheetContent.displayName = "BottomSheetContent"

const BottomSheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`flex flex-col space-y-2 mb-4 ${className || ""}`}
    {...props}
  />
)
BottomSheetHeader.displayName = "BottomSheetHeader"

const BottomSheetTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={`text-lg font-semibold leading-none tracking-tight ${className || ""}`}
      {...props}
    />
  )
)
BottomSheetTitle.displayName = "BottomSheetTitle"

export {
  BottomSheet,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetTitle,
}
