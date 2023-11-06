import { setActiveIndicator } from "./set-active-indicator"
import { indicatorSizeInPx } from "../constants"
import { Comparisons } from "@/shared/utils/comparisons"

export function moveByMouse(indicator: HTMLDivElement, onChange: (percents: number) => void) {
  const diapasonRails = indicator.parentElement
  if (!diapasonRails) return () => {}

  let isMouseDown = false

  let startMouseX = 0
  let startIndicatorX = indicator.offsetLeft

  function onMouseDown(this: HTMLDivElement, e: MouseEvent) {
    e.preventDefault()

    isMouseDown = true
    startMouseX = e.screenX    
    startIndicatorX = indicator.offsetLeft

    setActiveIndicator(indicator)
  }

  function onMouseUp(this: Document, e: MouseEvent) {
    e.preventDefault()

    isMouseDown = false
  }

  function onMouseMove(this: Document, e: MouseEvent) {
    if (!indicator || !diapasonRails || !isMouseDown) return

    const mouseDifference = e.screenX - startMouseX
    const newIndicatorX = startIndicatorX + mouseDifference

    const percents = mapPixelsToPercents(newIndicatorX, diapasonRails.offsetWidth)
    indicator.style.left = `clamp(-${indicatorSizeInPx / 2}px, calc(${percents}% - ${indicatorSizeInPx / 2}px), ${diapasonRails.offsetWidth - indicatorSizeInPx / 2}px)`

    const percentsValue = Comparisons.withinDiapason(0, percents, 100)
    onChange(percentsValue)
  }

  indicator.addEventListener('mousedown', onMouseDown)
  document.addEventListener('mouseup', onMouseUp)
  document.addEventListener('mousemove', onMouseMove)

  return () => {
    indicator.removeEventListener('mousedown', onMouseDown)
    document.removeEventListener('mouseup', onMouseUp)
    document.removeEventListener('mousemove', onMouseMove)
  }
} 

// counts indicator percent of whole diapason
function mapPixelsToPercents(pixels: number, maximum: number) {
  return (pixels + indicatorSizeInPx / 2) / (maximum - indicatorSizeInPx / 2) * 100
}