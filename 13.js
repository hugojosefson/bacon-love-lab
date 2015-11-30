export default (Bacon, riverFlowInCubicFeet, litresInCubicFeet) =>
    riverFlowInCubicFeet
        .map(([cubicFeet, numberOfSamples]) => [Math.round(cubicFeet * litresInCubicFeet), numberOfSamples])
        .filter(([litres, numberOfSamples]) => litres > 200000)
        .flatMap(([litres, numberOfSamples]) => Bacon.interval(100, litres).take(numberOfSamples))