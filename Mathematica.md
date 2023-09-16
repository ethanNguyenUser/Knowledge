#Computers
```Mathematica
Print["hi"]
```


```mathematica
reverselights = 
  Join[{{"Ambient", Black}}, 
   Table[{"Directional", Hue[0, 0, 1], 
     ImageScaled[{Sin[x], Cos[x], -.5}]}, {x, 0, 2 Pi - 2 Pi/8, 
     2 Pi/8}]];
AnatomyPlot3D[{AnatomyStyling[<|_ -> 
     Directive[Specularity[White, 50], Hue[.58, 0, 0.5, .1], 
      Lighting -> reverselights], 
    Entity["AnatomicalStructure", "OccipitalLobe"] -> Blue, 
    Entity["AnatomicalStructure", "ParietalLobe"] -> Yellow, 
    Entity["AnatomicalStructure", "TemporalLobe"] -> Green, 
    Entity["AnatomicalStructure", "FrontalLobe"] -> Red|>], 
  Entity["AnatomicalStructure", "Head"]}, 
 Background -> Hue[.58, 0, 1], SphericalRegion -> True]
```
