import React from 'react';

export type Config = {
  oneDayWidth: number
  maxZoomIn: number
  maxZoomOut: number
  stepZoom: number
}

const useTimelineConfig = () => {
  const [config, setConfig] = React.useState<Config>({
    oneDayWidth: 10,
    maxZoomIn: 20,
    maxZoomOut: 4,
    stepZoom: 2
  })

  const zoomIn = () => {
    if (config.oneDayWidth < config.maxZoomIn) {
      setConfig(prev => {
        let tempConfig = { ...prev }
        tempConfig.oneDayWidth += tempConfig.stepZoom
        return tempConfig;
      });
    }
  }

  const zoomOut = () => {
    if (config.oneDayWidth > config.maxZoomOut) {
      setConfig(prev => {
        let tempConfig = { ...prev }
        tempConfig.oneDayWidth -= tempConfig.stepZoom
        return tempConfig;
      })
    }
  }

  return { config, zoomIn, zoomOut }
}

export default useTimelineConfig;