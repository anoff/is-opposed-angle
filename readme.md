# is-opposed-angle

[![npm version](https://img.shields.io/npm/v/is-opposed-angle.svg)](https://www.npmjs.com/package/is-opposed-angle)
[![Build Status](https://travis-ci.org/anoff/is-opposed-angle.svg?branch=master)](https://travis-ci.org/anoff/is-opposed-angle)
[![Coverage Status](https://coveralls.io/repos/github/anoff/is-opposed-angle/badge.svg?branch=master)](https://coveralls.io/github/anoff/is-opposed-angle?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/anoff/is-opposed-angle.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/npm/is-opposed-angle/badge.svg)](https://snyk.io/test/npm/is-opposed-angle)
[![Outdated dependencies](https://david-dm.org/anoff/is-opposed-angle.svg)](https://david-dm.org/anoff/is-opposed-angle)


> check if two angles are in opposite direction


## Install

```
$ npm install --save is-opposed-angle
```


## Usage

Returns `true` if first and second argument are opposed angles. By default the angles must be passed in **radian**.

```js
const isOpposedAngle = require('is-opposed-angle');

isOpposedAngle(0, Math.PI);
//=> true

// Use the options argument for degrees
isOpposedAngle(0, 540, {isDegree: true});
//=> true
```


## API

### isOpposedAngle(angle1, angle2, [options]) : `Boolean`

#### angle1 [rad]

Type: `number`

First angle by default it is assumed to be in radian format. See _options_ for using other angle units.

#### angle2 [rad]

Type: `number`

Second angle by default it is assumed to be in radian format. See _options_ for using other angle units.

#### options

##### isDegree

Type: `boolean`<br>
Default: `false`

Interpret the `angle1` and `angle2` values in degrees.

##### tolerance [rad]

Type: `number`<br>
Default: `0.1`

If the angle difference is not exactly opposite but within `tolerance` it is still considered opposed. Should be supplied in same unit as angle.

## License

MIT © [anoff](http://anoff.io)
