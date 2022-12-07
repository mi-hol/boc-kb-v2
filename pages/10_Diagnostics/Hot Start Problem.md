# Hot Start Problem

## The Symptom

This problem is mainly seen on the 1130, but some RS900's have displayed it as well. When the engine is cold, the starter motor spins the crank over easily,
but when hot, it doesn't have enough power to complete the task. If left for 15 minutes the engine cools enough for the starter to do it's job.  
The 900 didn't have this symptom, but it did have the same problem, manifesting itself a little differently.

## Preamble

Here's my take on it - as far as I understand it. The factory have said nothing - rightly or wrongly. For a small factory, short on funds,
maybe it was better to keep it as quiet as possible ......  
(NB: Honda had the same sort of problem with it's VF750, denied it, lost face & had to produce something special in the VFR750 to regain it.
Honda had the financial power to get away with it. It's been said that the VFR750 took much longer than normal to break even.
Sadly, Benelli doesn't have the resources available to Honda.)

## So what's going on?

The alternator drive shaft / Z25 gear were not concentric on any, but the latest parts. The Z25 gear was also a little too big, and the clearances too small.  
The clutch intermediate gear drives the Z25 gear. When cold, there is clearance, or backlash.
As the engine warms up, the clearance grows smaller, and in some cases, negative. It depends on how badly off concentric, the Z25 gear is, as to what ultimately happens.  
There is one immutable truth though. Any negative gear clearance, if forced, will result in something bending. So what bent?

## History

Back in 2003, it was the clutch basket. It failed, and was strengthened. The next weakest link was the intermediate gear. It failed ....  

![Clutch Intermediate Gear Collapse](/images/InterGearCollapse.jpg)

and was widened from 6 to 8mm. It's concentricity was improved as well.

Then Benelli started building the 900RS engines in-house, taking over from Moto Morini.
They also changed the crankshaft stroke, shortened the conrods and raised the compression, to create the 1130.

... and the symptoms broadened, a little. The 1130's were plagued with the Hot Start Problem.
(A couple RS' had it too)
A crushed alternator shaft bearing was reported, and alternator shafts turned up broken - at a lubrication hole - in both engines, but the 1130 more pronounced.
These were the next weakest links.  

![BenelliDave's Broken Drive Shaft](/images/Dave'sBrokenShaft.jpg)

![BenelliDave's Z25 Gear's Come Adrift](/images/Dave'sFloatingZ25Gear.jpg)

BenelliDave's Broken Drive Shaft - broken at the oil hole

This is what happens when the shaft breaks. It gets noisy!

![Laurence's Bent Drive Shaft](/images/Laurence'sDriveShaft.jpg)

Laurence caught his before it broke - notice the bend ?

There were also other parts failing, such as the alternator drive shaft bolt loosening, allowing the shaft to move towards the clutch.
[The Z25 gear would then become partially disengaged with the intermediate gear, and both suffered.](/05_Engine/06_Alternator/Noisy%20Alternator)
This wasn't linked to the Hot Start Problem, but did add a "red herring", making it more difficult to track down the cause of the Hot Start Problem.  

![Lock Washer](/images/LockWasher1.jpg)

![Lock WasherRotated](/images/LockWasher2.jpg)

Alternator drive shaft lock washer - the tabs can break off

The lock washer rotated 90 degrees

![Alternator Shaft Lock Washer](/images/AlternatorShaftLockWasher.jpg)

![Belleville Washer](/images/Belleville_washer.jpg)

Alternator drive shaft lock washer installed

Belleville Washer replaces the lock washer

## The Cause

The penny finally dropped. It was all to do with clearances. The alternator shaft is now stronger, losing a lubrication hole.
The Z25 gear is machined on the shaft, to ensure concentricity. The gear is also smaller, providing a bigger clearance, that doesn't go negative as the engine heats up.  
As you can see, this problem had been designed into the engine from the very beginning. When Benelli took over the RS900 & 1130 engine production,
the problem got worse, I assume because they worked to finer tolerances.

## The Solution

If you have the hot start problem, the alternator shaft IS bending ( and the bearings ARE being subjected to undue pressure), while the engine is hot, and running.
The starter motor isn't strong enough to bend it enough, so it locks up when starting it hot. The engine itself IS strong enough to bend it as needed,
and it may eventually break, due to fatigue.  
If you don't have the Hot Start Problem, and yours is an 1130 or RS900, the shaft may still be bending, just not enough to stall the starter motor.
If it's bending, it could break. It's happened.  
If it hasn't broken, or been replaced, by the day before the warranty runs out, spend the 120 Euros & buy the latest (TNT Sport) shaft/gear  
P/N: R300000081000 "Gear Drive" plus  
P/N: R310032007000 "Washer, Special" (Belleville washer)  
then replace it yourself. It'll be cheaper than waiting for it to break.  

![Latest Alternator Drive Shaft and Z25 Gear](/images/AlternatorDriveZ25.jpg)  
NB: the alignment arrows.

## Addendum

For Tornados built in 2003, if it still has the original clutch - the one with a 6mm intermediate gear, that should be replaced.
One alternator shaft [HAS broken](http://www.benelliforum.com/forum/showthread.php?t=6028), so the alternator shaft/Z25 gear should be replaced as well.
I did it in 2008, just in case. It seems my choice was vindicated.

### Why Would The Clearance Get Smaller with Temp?(Physics Lesson follows)

The linear coefficient of expansion for aluminium is 22 um/m/K, while that for steel is about 13 um/m/K. So, you would expect, that as the engine warms up,
the aluminium casing would expand 1.7x more than the steel gears that are being supported by it. So the clearance should _increase_ with temperature.  
If you look a little deeper though, you'll find that the thermal conductivity of aluminium is 6x that of steel.
So heat stored in steel won't move as quickly to the surrounding oil, or aluminium casing, as it will when it reaches the casing, and then to the surrounding air.  
It's conceivable, that if the ambient temperature is 20C, the casing, which can still be touched (just), will be at 50C, or less. A rise of 30C.
If the expansion were the same, then the steel temp rise would need to be 1.7x that of the casing, or 51C. It's absolute temp would then be 71C.
Not inconceivable. In fact, it's likely to be similar to the oil temperature, if not higher, which is similar to the coolant temperature, if not higher.

Under normal operating conditions, the coolant is at, or about, 90C. 70C above ambient. The aluminium will have expanded by 660um/m,
while the steel gears will have expanded by 910um/m ....... Now we know where the clearance went!  
(Here ended the lesson.)

## Other Related (maybe) Engine Faults

### Alternator Drive Shaft Bolt #1

The alternator drive bell was fixed to the drive shaft with a flat washer and Loctite. It came loose, allowing the shaft to move towards the intermediate gear.
If left long enough, the intermediate gear & the Z25 gear would be severely worn & fail.  
Benelli then added the lock washer, which, as you have seen, didn't stop the bolt from loosening due to thermal expansion. It just limited the shaft movement,
until the locating tabs on the washer broke, with obvious results.  
The factory then changed to a Belleville washer, which allows for thermal expansion, and so far, has been reliable.

### Alternator Drive Shaft Bolt #2

At least 1 bolt has sheared off it's head (bobw & maybe colin). This may have been because it was weakened by reducing the head height, as Benelli have been doing.  
Or, it may have been over-stressed when it was installed.  
Or maybe it wasn't a high tensile bolt in the first place. Impossible to tell, because the marking was removed when the head height was reduced !  
Colin surmised that his failed because his clutch was out of balance, due to faulty cush springs, placing undue stress on the drive shaft bolt.  
I used a standard M10x1.25x25 R8.8 hex head set screw. The only way I could be sure of what I was installing.

### Alternator Spindle

Minor (?), but a bad batch of alternators were fitted, that would break their shafts at the input end.
This was a quality control problem, and quickly sorted.
