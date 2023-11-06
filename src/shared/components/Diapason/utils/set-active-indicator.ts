import { indicatorActiveAttribute, indicatorAttribute } from "../constants"

export function setActiveIndicator(indicator: HTMLDivElement) {
  Array.from(document.querySelectorAll(`[${indicatorAttribute}]`))
    .forEach(indicatorLabel => indicatorLabel.removeAttribute(indicatorActiveAttribute))
    
  indicator.setAttribute(indicatorActiveAttribute, '')
}