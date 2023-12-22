import './App.css';
import React, { useState } from 'react'
import DeCAPTCHA from './DeCAPTCHA.js';
// image set 0
import set0Img0 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square0.png'
import set0Img1 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square1.png'
import set0Img2 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square2.png'
import set0Img3 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square3.png'
import set0Img4 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square4.png'
import set0Img5 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square5.png'
import set0Img6 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square6.png'
import set0Img7 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square7.png'
import set0Img8 from './assets/imgs/DeCaptcha/(31.3015121,34.2404834)_square8.png'

// image set 1
import set1Img0 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square0.png'
import set1Img1 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square1.png'
import set1Img2 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square2.png'
import set1Img3 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square3.png'
import set1Img4 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square4.png'
import set1Img5 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square5.png'
import set1Img6 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square6.png'
import set1Img7 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square7.png'
import set1Img8 from './assets/imgs/DeCaptcha/(31.27989053312947, 34.25657411500963)_square8.png'

// image set 2
import set2Img0 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square0.png'
import set2Img1 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square1.png'
import set2Img2 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square2.png'
import set2Img3 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square3.png'
import set2Img4 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square4.png'
import set2Img5 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square5.png'
import set2Img6 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square6.png'
import set2Img7 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square7.png'
import set2Img8 from './assets/imgs/DeCaptcha/(31.34767960677077, 34.29024094528803)_square8.png'

//image set 3
import set3Img0 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square0.png'
import set3Img1 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square1.png'
import set3Img2 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square2.png'
import set3Img3 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square3.png'
import set3Img4 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square4.png'
import set3Img5 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square5.png'
import set3Img6 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square6.png'
import set3Img7 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square7.png'
import set3Img8 from './assets/imgs/DeCaptcha/(31.34798122535702, 34.2808033644178)_square8.png'

import set4Img0 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square0.png'
import set4Img1 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square1.png'
import set4Img2 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square2.png'
import set4Img3 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square3.png'
import set4Img4 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square4.png'
import set4Img5 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square5.png'
import set4Img6 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square6.png'
import set4Img7 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square7.png'
import set4Img8 from './assets/imgs/DeCaptcha/(31.47096429552248, 34.402024937551886)_square8.png'

import set5Img0 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square0.png'
import set5Img1 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square1.png'
import set5Img2 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square2.png'
import set5Img3 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square3.png'
import set5Img4 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square4.png'
import set5Img5 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square5.png'
import set5Img6 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square6.png'
import set5Img7 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square7.png'
import set5Img8 from './assets/imgs/DeCaptcha/(31.50428759668069, 34.46439956569531)_square8.png'

import set6Img0 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square0.png'
import set6Img1 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square1.png'
import set6Img2 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square2.png'
import set6Img3 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square3.png'
import set6Img4 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square4.png'
import set6Img5 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square5.png'
import set6Img6 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square6.png'
import set6Img7 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square7.png'
import set6Img8 from './assets/imgs/DeCaptcha/(31.51591513490486, 34.42689734792504)_square8.png'

import set7Img0 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square0.png'
import set7Img1 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square1.png'
import set7Img2 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square2.png'
import set7Img3 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square3.png'
import set7Img4 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square4.png'
import set7Img5 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square5.png'
import set7Img6 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square6.png'
import set7Img7 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square7.png'
import set7Img8 from './assets/imgs/DeCaptcha/(31.51714776162701, 34.4483121153424)_square8.png'

import set8Img0 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square0.png'
import set8Img1 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square1.png'
import set8Img2 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square2.png'
import set8Img3 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square3.png'
import set8Img4 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square4.png'
import set8Img5 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square5.png'
import set8Img6 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square6.png'
import set8Img7 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square7.png'
import set8Img8 from './assets/imgs/DeCaptcha/(31.54244347649036, 34.48076766931016)_square8.png'

import set9Img0 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square0.png'
import set9Img1 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square1.png'
import set9Img2 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square2.png'
import set9Img3 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square3.png'
import set9Img4 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square4.png'
import set9Img5 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square5.png'
import set9Img6 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square6.png'
import set9Img7 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square7.png'
import set9Img8 from './assets/imgs/DeCaptcha/(31.277341030448323, 34.256775571164404)_square8.png'

import set10Img0 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square0.png'
import set10Img1 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square1.png'
import set10Img2 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square2.png'
import set10Img3 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square3.png'
import set10Img4 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square4.png'
import set10Img5 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square5.png'
import set10Img6 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square6.png'
import set10Img7 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square7.png'
import set10Img8 from './assets/imgs/DeCaptcha/(31.280744036249065, 34.256907985454696)_square8.png'

import set11Img0 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square0.png'
import set11Img1 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square1.png'
import set11Img2 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square2.png'
import set11Img3 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square3.png'
import set11Img4 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square4.png'
import set11Img5 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square5.png'
import set11Img6 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square6.png'
import set11Img7 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square7.png'
import set11Img8 from './assets/imgs/DeCaptcha/(31.326674447648788, 34.34699031374884)_square8.png'

import set12Img0 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square0.png'
import set12Img1 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square1.png'
import set12Img2 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square2.png'
import set12Img3 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square3.png'
import set12Img4 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square4.png'
import set12Img5 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square5.png'
import set12Img6 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square6.png'
import set12Img7 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square7.png'
import set12Img8 from './assets/imgs/DeCaptcha/(31.342720997250176, 34.3253191433887)_square8.png'

import set13Img0 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square0.png'
import set13Img1 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square1.png'
import set13Img2 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square2.png'
import set13Img3 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square3.png'
import set13Img4 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square4.png'
import set13Img5 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square5.png'
import set13Img6 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square6.png'
import set13Img7 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square7.png'
import set13Img8 from './assets/imgs/DeCaptcha/(31.348639425228786, 34.280436213493196)_square8.png'

import set14Img0 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square0.png'
import set14Img1 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square1.png'
import set14Img2 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square2.png'
import set14Img3 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square3.png'
import set14Img4 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square4.png'
import set14Img5 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square5.png'
import set14Img6 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square6.png'
import set14Img7 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square7.png'
import set14Img8 from './assets/imgs/DeCaptcha/(31.375995840052983, 34.341689922088996)_square8.png'

import set15Img0 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square0.png'
import set15Img1 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square1.png'
import set15Img2 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square2.png'
import set15Img3 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square3.png'
import set15Img4 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square4.png'
import set15Img5 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square5.png'
import set15Img6 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square6.png'
import set15Img7 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square7.png'
import set15Img8 from './assets/imgs/DeCaptcha/(31.479825129974277, 34.4175512)_square8.png'

import set16Img0 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square0.png'
import set16Img1 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square1.png'
import set16Img2 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square2.png'
import set16Img3 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square3.png'
import set16Img4 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square4.png'
import set16Img5 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square5.png'
import set16Img6 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square6.png'
import set16Img7 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square7.png'
import set16Img8 from './assets/imgs/DeCaptcha/(31.503886569799473, 34.462206977532574)_square8.png'

import set17Img0 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square0.png'
import set17Img1 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square1.png'
import set17Img2 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square2.png'
import set17Img3 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square3.png'
import set17Img4 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square4.png'
import set17Img5 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square5.png'
import set17Img6 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square6.png'
import set17Img7 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square7.png'
import set17Img8 from './assets/imgs/DeCaptcha/(31.504239097906165, 34.46450017414427)_square8.png'

import set18Img0 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square0.png'
import set18Img1 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square1.png'
import set18Img2 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square2.png'
import set18Img3 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square3.png'
import set18Img4 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square4.png'
import set18Img5 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square5.png'
import set18Img6 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square6.png'
import set18Img7 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square7.png'
import set18Img8 from './assets/imgs/DeCaptcha/(31.504938587740995, 34.46351944672771)_square8.png'

import set19Img0 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square0.png'
import set19Img1 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square1.png'
import set19Img2 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square2.png'
import set19Img3 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square3.png'
import set19Img4 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square4.png'
import set19Img5 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square5.png'
import set19Img6 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square6.png'
import set19Img7 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square7.png'
import set19Img8 from './assets/imgs/DeCaptcha/(31.517340503822595, 34.436307378878986)_square8.png'

import set20Img0 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square0.png'
import set20Img1 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square1.png'
import set20Img2 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square2.png'
import set20Img3 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square3.png'
import set20Img4 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square4.png'
import set20Img5 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square5.png'
import set20Img6 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square6.png'
import set20Img7 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square7.png'
import set20Img8 from './assets/imgs/DeCaptcha/(31.533196735690023, 34.44627660248287)_square8.png'

import set21Img0 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square0.png'
import set21Img1 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square1.png'
import set21Img2 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square2.png'
import set21Img3 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square3.png'
import set21Img4 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square4.png'
import set21Img5 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square5.png'
import set21Img6 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square6.png'
import set21Img7 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square7.png'
import set21Img8 from './assets/imgs/DeCaptcha/(31.577757402336022, 34.47850181701507)_square8.png'

import set22Img0 from './assets/imgs/DeCaptcha/chair_square.png'
import set22Img1 from './assets/imgs/DeCaptcha/random_square0.png'
import set22Img2 from './assets/imgs/DeCaptcha/chair_square1.png'
import set22Img3 from './assets/imgs/DeCaptcha/random_square1.png'
import set22Img4 from './assets/imgs/DeCaptcha/random_square2.png'
import set22Img5 from './assets/imgs/DeCaptcha/chair_square2.png'
import set22Img6 from './assets/imgs/DeCaptcha/chair_square3.png'
import set22Img7 from './assets/imgs/DeCaptcha/random_square3.png'
import set22Img8 from './assets/imgs/DeCaptcha/random_square4.png'

import set23Img0 from './assets/imgs/DeCaptcha/random_square5.png'
import set23Img1 from './assets/imgs/DeCaptcha/random_square6.png'
import set23Img2 from './assets/imgs/DeCaptcha/chair_square4.png'
import set23Img3 from './assets/imgs/DeCaptcha/random_square7.png'
import set23Img4 from './assets/imgs/DeCaptcha/random_square8.png'
import set23Img5 from './assets/imgs/DeCaptcha/random_square9.png'
import set23Img6 from './assets/imgs/DeCaptcha/chair_square5.png'
import set23Img7 from './assets/imgs/DeCaptcha/random_square10.png'
import set23Img8 from './assets/imgs/DeCaptcha/chair_square6.png'

import set24Img0 from './assets/imgs/DeCaptcha/random_square11.png'
import set24Img1 from './assets/imgs/DeCaptcha/chair_square7.png'
import set24Img2 from './assets/imgs/DeCaptcha/random_square12.png'
import set24Img3 from './assets/imgs/DeCaptcha/chair_square8.png'
import set24Img4 from './assets/imgs/DeCaptcha/random_square13.png'
import set24Img5 from './assets/imgs/DeCaptcha/random_square14.png'
import set24Img6 from './assets/imgs/DeCaptcha/random_square15.png'
import set24Img7 from './assets/imgs/DeCaptcha/random_square16.png'
import set24Img8 from './assets/imgs/DeCaptcha/chair_square9.png'

import set25Img0 from './assets/imgs/DeCaptcha/random_square17.png'
import set25Img1 from './assets/imgs/DeCaptcha/random_square18.png'
import set25Img2 from './assets/imgs/DeCaptcha/random_square19.png'
import set25Img3 from './assets/imgs/DeCaptcha/palms_square0.png'
import set25Img4 from './assets/imgs/DeCaptcha/palms_square1.png'
import set25Img5 from './assets/imgs/DeCaptcha/random_square20.png'
import set25Img6 from './assets/imgs/DeCaptcha/palms_square2.png'
import set25Img7 from './assets/imgs/DeCaptcha/palms_square3.png'
import set25Img8 from './assets/imgs/DeCaptcha/random_square21.png'

import set26Img0 from './assets/imgs/DeCaptcha/random_square22.png'
import set26Img1 from './assets/imgs/DeCaptcha/random_square23.png'
import set26Img2 from './assets/imgs/DeCaptcha/prayerrug_square0.png'
import set26Img3 from './assets/imgs/DeCaptcha/random_square24.png'
import set26Img4 from './assets/imgs/DeCaptcha/random_square25.png'
import set26Img5 from './assets/imgs/DeCaptcha/prayerrug_square1.png'
import set26Img6 from './assets/imgs/DeCaptcha/random_square26.png'
import set26Img7 from './assets/imgs/DeCaptcha/random_square27.png'
import set26Img8 from './assets/imgs/DeCaptcha/prayerrug_square2.png'


// audio file for captcha audio
import audioTest from './assets/audio_test.mp3'
import { Helmet } from 'react-helmet';

function App() {
  const [captchaView, setCaptchaView] = useState(true);
  const [infoView, setInfoView] = useState(false)

  // see README.md for format of object parameter
  const myArrayOfObjects = 
  [
      {
        "squareOrImage": "square",
        "title": "truck",
        "images": [set0Img0, set0Img1, set0Img2, set0Img3, set0Img4, set0Img5, set0Img6, set0Img7, set0Img8],
        "answers": [7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "chair",
        "images": [set1Img0, set1Img1, set1Img2, set1Img3, set1Img4, set1Img5, set1Img6, set1Img7, set1Img8],
        "answers": [5, 8]
      },
      {
        "squareOrImage": "square",
        "title": "prayer rug",
        "images": [set2Img0, set2Img1, set2Img2, set2Img3, set2Img4, set2Img5, set2Img6, set2Img7, set2Img8],
        "answers": [7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "car",
        "images": [set3Img0, set3Img1, set3Img2, set3Img3, set3Img4, set3Img5, set3Img6, set3Img7, set3Img8],
        "answers": [1, 2, 4, 5]
      },
      {
        "squareOrImage": "square",
        "title": "cat",
        "images": [set4Img0, set4Img1, set4Img2, set4Img3, set4Img4, set4Img5, set4Img6, set4Img7, set4Img8],
        "answers": [7]
      },
      {
        "squareOrImage": "square",
        "title": "stairs",
        "images": [set5Img0, set5Img1, set5Img2, set5Img3, set5Img4, set5Img5, set5Img6, set5Img7, set5Img8],
        "answers": [3, 4, 5, 6, 7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "billboard",
        "images": [set6Img0, set6Img1, set6Img2, set6Img3, set6Img4, set6Img5, set6Img6, set6Img7, set6Img8],
        "answers": [4, 7]
      },
      {
        "squareOrImage": "square",
        "title": "window",
        "images": [set7Img0, set7Img1, set7Img2, set7Img3, set7Img4, set7Img5, set7Img6, set7Img7, set7Img8],
        "answers": [1, 2, 4, 5]
      },
      {
        "squareOrImage": "square",
        "title": "shoes",
        "images": [set8Img0, set8Img1, set8Img2, set8Img3, set8Img4, set8Img5, set8Img6, set8Img7, set8Img8],
        "answers": [1, 2, 4, 5]
      },
      {
        "squareOrImage": "square",
        "title": "backpack",
        "images": [set9Img0, set9Img1, set9Img2, set9Img3, set9Img4, set9Img5, set9Img6, set9Img7, set9Img8],
        "answers": [0, 3, 4, 5, 6, 7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "books",
        "images": [set10Img0, set10Img1, set10Img2, set10Img3, set10Img4, set10Img5, set10Img6, set10Img7, set10Img8],
        "answers": [4, 5, 6, 7]
      },
      {
        "squareOrImage": "square",
        "title": "رمضان كريم",
        "images": [set11Img0, set11Img1, set11Img2, set11Img3, set11Img4, set11Img5, set11Img6, set11Img7, set11Img8],
        "answers": [4, 7]
      },
      {
        "squareOrImage": "square",
        "title": "motorcycle",
        "images": [set12Img0, set12Img1, set12Img2, set12Img3, set12Img4, set12Img5, set12Img6, set12Img7, set12Img8],
        "answers": [3, 6]
      },
      {
        "squareOrImage": "square",
        "title": "sign",
        "images": [set13Img0, set13Img1, set13Img2, set13Img3, set13Img4, set13Img5, set13Img6, set13Img7, set13Img8],
        "answers": [1, 2]
      },
      {
        "squareOrImage": "square",
        "title": "date palms",
        "images": [set14Img0, set14Img1, set14Img2, set14Img3, set14Img4, set14Img5, set14Img6, set14Img7, set14Img8],
        "answers": [5, 6, 7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "date palms",
        "images": [set15Img0, set15Img1, set15Img2, set15Img3, set15Img4, set15Img5, set15Img6, set15Img7, set15Img8],
        "answers": [3, 4, 5]
      },
      {
        "squareOrImage": "square",
        "title": "chair",
        "images": [set16Img0, set16Img1, set16Img2, set16Img3, set16Img4, set16Img5, set16Img6, set16Img7, set16Img8],
        "answers": [3, 6]
      },
      {
        "squareOrImage": "square",
        "title": "chair",
        "images": [set17Img0, set17Img1, set17Img2, set17Img3, set17Img4, set17Img5, set17Img6, set17Img7, set17Img8],
        "answers": [6, 7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "vegetables",
        "images": [set18Img0, set18Img1, set18Img2, set18Img3, set18Img4, set18Img5, set18Img6, set18Img7, set18Img8],
        "answers": [3, 4, 5, 7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "buildings",
        "images": [set19Img0, set19Img1, set19Img2, set19Img3, set19Img4, set19Img5, set19Img6, set19Img7, set19Img8],
        "answers": [3, 4, 5, 6, 7, 8]
      },
      {
        "squareOrImage": "square",
        "title": "soccer ball",
        "images": [set20Img0, set20Img1, set20Img2, set20Img3, set20Img4, set20Img5, set20Img6, set20Img7, set20Img8],
        "answers": [8]
      },
      {
        "squareOrImage": "square",
        "title": "rocks",
        "images": [set21Img0, set21Img1, set21Img2, set21Img3, set21Img4, set21Img5, set21Img6, set21Img7, set21Img8],
        "answers": [6, 7, 8]
      },
      {
        "squareOrImage": "images",
        "title": "chair",
        "images": [set22Img0, set22Img1, set22Img2, set22Img3, set22Img4, set22Img5, set22Img6, set22Img7, set22Img8],
        "answers": [0, 2, 5, 6]
      },
      {
        "squareOrImage": "images",
        "title": "chair",
        "images": [set23Img0, set23Img1, set23Img2, set23Img3, set23Img4, set23Img5, set23Img6, set23Img7, set23Img8],
        "answers": [2, 6, 8]
      },
      {
        "squareOrImage": "images",
        "title": "chair",
        "images": [set24Img0, set24Img1, set24Img2, set24Img3, set24Img4, set24Img5, set24Img6, set24Img7, set24Img8],
        "answers": [1, 3, 8]
      },
      {
        "squareOrImage": "images",
        "title": "date palms",
        "images": [set25Img0, set25Img1, set25Img2, set25Img3, set25Img4, set25Img5, set25Img6, set25Img7, set25Img8],
        "answers": [3, 4, 6, 7]
      },
      {
        "squareOrImage": "images",
        "title": "prayer rug",
        "images": [set26Img0, set26Img1, set26Img2, set26Img3, set26Img4, set26Img5, set26Img6, set26Img7, set26Img8],
        "answers": [2, 5, 8]
      },
  ]

  const onCorrect = () => {
    setCaptchaView(false)
    setInfoView(true)
  }

  return (
    <div className="App">
      <Helmet>
        <meta charSet='utf-8'/>
        <title>somewhere in Gaza</title>
        <link rel='canonical' href='https://somewhereingaza.github.io/' />
        <meta name='description' content='A net-art project by Adam Wajahat'/>
      </Helmet>
      {captchaView && (<div className='wrapper'>
        <DeCAPTCHA objOfQuizzes={myArrayOfObjects} infoLink='https://adamwajahat.github.io/' audioLink={audioTest} onCaptchaCorrect={onCorrect}/>
      </div>)}
      {infoView && (<div className='information'>
        <div className='generalInfo'>
          <h1>
            somewhere in Gaza
          </h1>
          <body>
            "As I cut each of the captures into 9 squares in GIMP, I thought how much of these places that are now on my screen are left"
          </body>
          <div className='signature'>
            -<a href='https://adamwajahat.github.io/'>Adam Wajahat</a>
          </div>
        </div>
        <div className='locationInfo'>
          <h2>
            Coordinates
          </h2>
          <body>
            Below is a list of all the photo spheres and photo paths sourced from Google Maps apart of this project. Please, follow the trail of how I came to explore Gaza miles away.
            <br></br>
            <br></br>
            <div className='coordinates'>
              <a href='https://www.google.com/maps/@31.3015121,34.2404834,3a,40y,109.8h,88.14t/data=!3m11!1e1!3m9!1sAF1QipNmh7M8pKfZXr2n8GvmYlpFccQUmqrSm5IY7i8r!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNmh7M8pKfZXr2n8GvmYlpFccQUmqrSm5IY7i8r%3Dw203-h360-k-no!7i1080!8i1920!9m2!1b1!2i27?entry=ttu
              '>(31.3015121,34.2404834)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.2798821,34.2565744,3a,60y,142.84h,86.12t/data=!3m11!1e1!3m9!1sAF1QipOvskBJj97Xk92meitJHGzjDMgaJOt_suTkUMiT!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOvskBJj97Xk92meitJHGzjDMgaJOt_suTkUMiT%3Dw203-h100-k-no-pi-0-ya190-ro0-fo100!7i6144!8i3072!9m2!1b1!2i27?entry=ttu'>(31.2798821,34.2565744)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.2806965,34.2569003,3a,75y,74.21h,90t/data=!3m8!1e1!3m6!1sAF1QipMgPHVWFyPeef4iEFSL-Jdcsw4yWr6IvpQzcSXO!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMgPHVWFyPeef4iEFSL-Jdcsw4yWr6IvpQzcSXO%3Dw203-h100-k-no-pi-0-ya117.69625-ro-0-fo100!7i8704!8i4352?entry=ttu
              '>(31.2806965,34.2569003)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.3476567,34.2902019,3a,75y,90.04h,90t/data=!3m8!1e1!3m6!1sAF1QipMfMRfKaAu4PvaUs3P54RKsm2DrTsTfWHzNtQkG!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMfMRfKaAu4PvaUs3P54RKsm2DrTsTfWHzNtQkG%3Dw203-h100-k-no-pi-0-ya141.04451-ro0-fo100!7i8704!8i4352?entry=ttu
              '>(31.3476567,34.2902019)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.4709019,34.4021268,3a,75y,6.32h,102.45t/data=!3m8!1e1!3m6!1sAF1QipODYNFsb1h4xGOWlQg9MN6b5UtwuBMQOscrSt46!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipODYNFsb1h4xGOWlQg9MN6b5UtwuBMQOscrSt46%3Dw203-h100-k-no-pi-0-ya123.63727-ro-0-fo100!7i10240!8i5120?entry=ttu
              '>(31.4709019,34.4021268)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.479915,34.4175512,3a,75y,249.14h,96.63t/data=!3m8!1e1!3m6!1sAF1QipM5dH44-kI7-e_ArL9VO_bqByjDS0LBEHDiXrnd!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM5dH44-kI7-e_ArL9VO_bqByjDS0LBEHDiXrnd%3Dw203-h100-k-no-pi0-ya19.000002-ro-0-fo100!7i7680!8i3840?entry=ttu
              '>(31.479915,34.4175512)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.5424276,34.4807827,3a,75y,143.98h,81.66t/data=!3m8!1e1!3m6!1sAF1QipOe7AA9BKS9WHG7neEF02tCr4zsAENUX7lb1gyC!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOe7AA9BKS9WHG7neEF02tCr4zsAENUX7lb1gyC%3Dw203-h100-k-no-pi-10-ya358-ro-0-fo100!7i10240!8i5120?entry=ttu'>(31.5424276,34.4807827)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.5331829,34.4462627,3a,90y,16.32h,91.17t/data=!3m8!1e1!3m6!1sAF1QipN34rInmFPTSK4Tzex1DBkJC9HUNpNWQmCC8fWY!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN34rInmFPTSK4Tzex1DBkJC9HUNpNWQmCC8fWY%3Dw203-h100-k-no-pi-10-ya333-ro-0-fo100!7i8704!8i4352?entry=ttu
              '>(31.5331829,34.4462627)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.517304,34.436307,3a,75y,61.99h,90.63t/data=!3m8!1e1!3m6!1sAF1QipNg1KQTb3YpEhh94KDOoiuEn_t5j2_yvJtfFNk!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNg1KQTb3YpEhh94KDOoiuEn_t5j2_yvJtfFNk%3Dw203-h100-k-no-pi-10-ya63.20001-ro-0-fo100!7i9906!8i4952?entry=ttu'>(31.517304,34.436307)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.515833,34.426945,3a,75y,303.87h,110.44t/data=!3m8!1e1!3m6!1sAF1QipNTn_Yjyy_TjFKsX0otSzBj8fhtr2XfO5RQoL0G!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNTn_Yjyy_TjFKsX0otSzBj8fhtr2XfO5RQoL0G%3Dw203-h100-k-no-pi-20-ya250.99998-ro-0-fo100!7i4000!8i2000?entry=ttu
              '>(31.515833,34.426945)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.5047408,34.4636068,3a,75y,87.68h,74.06t,360r/data=!3m6!1e1!3m4!1sAF1QipPkOPwWluibcIoq1rg6Bcu6P3ePu3sSi9996_La!2e10!7i4096!8i2048?entry=ttu
              '>(31.5047408,34.4636068)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.5041959,34.4645251,3a,75y,106.75h,103.51t/data=!3m8!1e1!3m6!1sAF1QipM3MNwkaJ8QEhdBL7BGCDum7REC6drv_k5UKc1e!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM3MNwkaJ8QEhdBL7BGCDum7REC6drv_k5UKc1e%3Dw203-h100-k-no-pi-0-ya320.86017-ro0-fo100!7i8704!8i4352?entry=ttu'>(31.5041959,34.4645251)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.5043065,34.4644178,3a,75y,192.43h,99.25t/data=!3m8!1e1!3m6!1sAF1QipME78qPmXThdlzReMEKWZl0Ye9KXnFd30k486Pu!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipME78qPmXThdlzReMEKWZl0Ye9KXnFd30k486Pu%3Dw203-h100-k-no-pi-0-ya35.786068-ro-0-fo100!7i8752!8i4376?entry=ttu'>(31.5043065,34.4644178)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.5040825,34.4626527,3a,85.9y,126.88h,89.48t/data=!3m8!1e1!3m6!1sAF1QipPt-QB9v_VC5robpvuLRNT-D2xcJX1wxQbdV31Z!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPt-QB9v_VC5robpvuLRNT-D2xcJX1wxQbdV31Z%3Dw203-h100-k-no-pi-0-ya109.78659-ro-0-fo100!7i8704!8i4352?entry=ttu
              '>(31.5040825,34.4626527)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.5777205,34.4780704,3a,75y,176.16h,104.13t/data=!3m8!1e1!3m6!1sAF1QipORFIavoJt_YjhDNK0FWMMruNQGlxYTULRu-dG_!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipORFIavoJt_YjhDNK0FWMMruNQGlxYTULRu-dG_%3Dw203-h100-k-no-pi-20-ya215-ro0-fo100!7i10240!8i5120?entry=ttu
              '>(31.5777205,34.4780704)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.5170563,34.4482692,3a,75y,215.87h,76.01t/data=!3m8!1e1!3m6!1sAF1QipMnfcQiiarZIvwVgPeKq9LPdECvABPWPz8AhiXa!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMnfcQiiarZIvwVgPeKq9LPdECvABPWPz8AhiXa%3Dw203-h100-k-no-pi0-ya289.1397-ro-0-fo100!7i8704!8i4352?entry=ttu
              '>(31.5170563,34.4482692)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.376005,34.3416631,3a,75y,64.67h,115.85t/data=!3m8!1e1!3m6!1sAF1QipP668hwABH01dhHSkWYTaIBAbdwRlT3fdnNUY9d!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP668hwABH01dhHSkWYTaIBAbdwRlT3fdnNUY9d%3Dw203-h100-k-no-pi0-ya326.29443-ro-0-fo100!7i8704!8i4352?entry=ttu
              '>(31.376005,34.3416631)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.3427205,34.325305,3a,75y,212.48h,93.03t/data=!3m8!1e1!3m6!1sAF1QipMDCZwveYO1xAuqJ2jx8pb4wPxwcsFg6KeD3By5!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMDCZwveYO1xAuqJ2jx8pb4wPxwcsFg6KeD3By5%3Dw203-h100-k-no-pi-0-ya6.868644-ro-0-fo100!7i7168!8i3584?entry=ttu
              '>(31.3427205,34.325305)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.3486211,34.2804684,3a,75y,275.06h,89t/data=!3m8!1e1!3m6!1sAF1QipMXGlyJnv7qEI_mdZkStpbOJOoXp5tgPHnJRNQ7!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMXGlyJnv7qEI_mdZkStpbOJOoXp5tgPHnJRNQ7%3Dw203-h100-k-no-pi0-ya288.04315-ro-0-fo100!7i10240!8i5120?entry=ttu
              '>(31.3486211,34.2804684)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.2773502,34.2567863,3a,75y,95.7h,73.33t/data=!3m8!1e1!3m6!1sAF1QipPqsCc3z1d97dU2LfS6V2zL7BEWbUjYxfHwU_td!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPqsCc3z1d97dU2LfS6V2zL7BEWbUjYxfHwU_td%3Dw203-h100-k-no-pi-0-ya229.32086-ro0-fo100!7i8704!8i4352?entry=ttu
              '>(31.2773502,34.2567863)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.3479629,34.280798,3a,75y,323.54h,69.22t/data=!3m8!1e1!3m6!1sAF1QipOJyLwapQNkH_PikmzxdNpb-PsJ4uaZzpygu5S_!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOJyLwapQNkH_PikmzxdNpb-PsJ4uaZzpygu5S_%3Dw203-h100-k-no-pi-0-ya226.6346-ro0-fo100!7i10240!8i5120?entry=ttu
              '>(31.3479629,34.280798)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.3265953,34.3470547,3a,75y,328.87h,99.52t/data=!3m8!1e1!3m6!1sAF1QipPliv8KG_ICzXJpTIzH8wZ8clCZzjt-qxXa49e7!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPliv8KG_ICzXJpTIzH8wZ8clCZzjt-qxXa49e7%3Dw203-h100-k-no-pi0-ya34.00001-ro-0-fo100!7i8704!8i4352?entry=ttu
              '>(31.3265953,34.3470547)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.3569117,34.2732133,3a,75y,7.11h,94.44t/data=!3m8!1e1!3m6!1sAF1QipPqw5KXrYmGff2Yg6YrS4BYMcct7fYcywTnFdeS!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPqw5KXrYmGff2Yg6YrS4BYMcct7fYcywTnFdeS%3Dw203-h100-k-no-pi0-ya299.0298-ro0-fo100!7i11264!8i5632?entry=ttu
              '>(31.3569117,34.2732133)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.355505,34.274425,3a,63.7y,197.5h,93.82t/data=!3m8!1e1!3m6!1sAF1QipO9JCgRGVrjK8YB92WaxMoFzBRdQXG44x2QLKcA!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO9JCgRGVrjK8YB92WaxMoFzBRdQXG44x2QLKcA%3Dw203-h100-k-no-pi0-ya212.67859-ro0-fo100!7i11264!8i5632?entry=ttu
              '>(31.355505,34.274425)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.4329788,34.3606672,3a,75.7y,272.76h,127.5t/data=!3m8!1e1!3m6!1sAF1QipMlymLVaUbhakXSSWf7VxQaTEJKzQLFJyxMIx4o!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMlymLVaUbhakXSSWf7VxQaTEJKzQLFJyxMIx4o%3Dw203-h100-k-no-pi-0-ya287.3189-ro0-fo100!7i11264!8i5632?entry=ttu
              '>(31.4329788,34.3606672)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.4726894,34.4005289,3a,75y,83.76h,103.13t/data=!3m8!1e1!3m6!1sAF1QipOA33UT-atvX7GQi3lQDxSJUIqt7UfM5mYTkPmO!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOA33UT-atvX7GQi3lQDxSJUIqt7UfM5mYTkPmO%3Dw203-h100-k-no-pi3.842436-ya44.445675-ro-2.3668876-fo100!7i7200!8i3600?entry=ttu
              '>(31.4726894,34.4005289)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.4914081,34.4085268,3a,75y,173.93h,74.61t/data=!3m8!1e1!3m6!1sAF1QipODn4TrWZzCt6Ds5bAJx8mn0KhEPdOFrglDERvd!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipODn4TrWZzCt6Ds5bAJx8mn0KhEPdOFrglDERvd%3Dw203-h100-k-no-pi-20-ya145.00002-ro0-fo100!7i10240!8i5120?entry=ttu
              '>(31.4914081,34.4085268)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.4819247,34.434088,3a,75y,73.64h,90.22t/data=!3m8!1e1!3m6!1sAF1QipOjQfN3UTbVWXpiepAg-tglNqRH_OA2d6fIDc7E!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOjQfN3UTbVWXpiepAg-tglNqRH_OA2d6fIDc7E%3Dw203-h100-k-no-pi-10-ya205-ro-0-fo100!7i10240!8i5120?entry=ttu
              '>(31.4819247,34.434088)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.4785358,34.4385455,3a,75y,273.68h,110.12t/data=!3m8!1e1!3m6!1sAF1QipO5ReWUTYZrli6Rg4VZ33J1gsklPpCfxUcKfa0j!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO5ReWUTYZrli6Rg4VZ33J1gsklPpCfxUcKfa0j%3Dw203-h100-k-no-pi-10-ya358-ro-0-fo100!7i10240!8i5120?entry=ttu
              '>(31.4785358,34.4385455)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.5439575,34.4987078,3a,75y,49.51h,103.74t/data=!3m8!1e1!3m6!1sAF1QipO0RsK-fs7kslyS8lkXsyuFeh7aJk4DsUe4szqd!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO0RsK-fs7kslyS8lkXsyuFeh7aJk4DsUe4szqd%3Dw203-h100-k-no-pi11.51786-ya299.5422-ro-0-fo100!7i10752!8i4676?entry=ttu
              '>(31.5439575,34.4987078)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.5296773,34.4474441,3a,75y,54.77h,95.37t/data=!3m8!1e1!3m6!1sAF1QipN2PKXI9nW0UmnNbkzaSRcVxcFtW5eOzYqdkFFx!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN2PKXI9nW0UmnNbkzaSRcVxcFtW5eOzYqdkFFx%3Dw203-h100-k-no-pi-0-ya78.07743-ro-0-fo100!7i10240!8i5120?entry=ttu
              '>(31.5296773,34.4474441)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.5219739,34.4389374,3a,75y,316.75h,101.48t/data=!3m8!1e1!3m6!1sAF1QipPye15deLffWF7xNYIxWsK3p53b2V0BLECkKUf6!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPye15deLffWF7xNYIxWsK3p53b2V0BLECkKUf6%3Dw203-h100-k-no-pi-10-ya150.6-ro-0-fo100!7i10264!8i5132?entry=ttu
              '>(31.5219739,34.4389374)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.5039286,34.464341,3a,75y,236.93h,91.07t/data=!3m8!1e1!3m6!1sAF1QipOaPij5YbM4HEakkesMjmYNvI4fu1TrWMHXVf0r!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOaPij5YbM4HEakkesMjmYNvI4fu1TrWMHXVf0r%3Dw203-h100-k-no-pi-0-ya195.74783-ro0-fo100!7i9422!8i4710?entry=ttu
              '>(31.5039286,34.464341)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.5025167,34.4576908,3a,75y,255.93h,107.61t/data=!3m8!1e1!3m6!1sAF1QipNMACDBrvuVrZBZzM9Hy6Hxu529Sbb_cPDi2G3r!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNMACDBrvuVrZBZzM9Hy6Hxu529Sbb_cPDi2G3r%3Dw203-h100-k-no-pi0-ya298.46317-ro-0-fo100!7i7928!8i3964?entry=ttu
              '>(31.5025167,34.4576908)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.5079468,34.4521282,3a,75y,58.36h,81.94t/data=!3m8!1e1!3m6!1sAF1QipMe-aCCYxTDCsdql_diKI4ibxM_eD2iNPq0_QJr!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMe-aCCYxTDCsdql_diKI4ibxM_eD2iNPq0_QJr%3Dw203-h100-k-no-pi-0-ya236.6637-ro0-fo100!7i7844!8i3922?entry=ttu
              '>(31.5079468,34.4521282)</a> 
              <br></br>
              <a href='https://www.google.com/maps/@31.5838226,34.4877196,3a,75y,318.26h,77.71t/data=!3m8!1e1!3m6!1sAF1QipMnOj5n6CWOHNxKFtoQf7ujSecABCGuqWRuuamX!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMnOj5n6CWOHNxKFtoQf7ujSecABCGuqWRuuamX%3Dw203-h100-k-no-pi-20-ya19.000006-ro-0-fo100!7i10240!8i5120?entry=ttu
              '>(31.5838226,34.4877196)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.5653251,34.4728522,3a,75y,12.56h,86.79t/data=!3m8!1e1!3m6!1sAF1QipMcvDmt_aVeO-eUwFpxbE7d81vQ-QNh9LfGRjpN!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMcvDmt_aVeO-eUwFpxbE7d81vQ-QNh9LfGRjpN%3Dw203-h100-k-no-pi-20-ya0-ro-0-fo100!7i5472!8i2736?entry=ttu
              '>(31.5653251,34.4728522)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.3748183,34.339626,3a,75y,15.23h,86.97t/data=!3m8!1e1!3m6!1sAF1QipOIgKGRPHTl-z82g0nzlDR-lfjuGB4u18PIDaEw!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOIgKGRPHTl-z82g0nzlDR-lfjuGB4u18PIDaEw%3Dw203-h100-k-no-pi-0-ya49.129696-ro-0-fo100!7i6144!8i3072?entry=ttu
              '>(31.3748183,34.339626)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.3374081,34.3470764,3a,75y,263.69h,102.42t/data=!3m8!1e1!3m6!1sAF1QipPIavodHULDYJ3eDXgLtDFXpD6XD5uSnBNrEkaV!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPIavodHULDYJ3eDXgLtDFXpD6XD5uSnBNrEkaV%3Dw203-h100-k-no-pi-0-ya169.34906-ro-0-fo100!7i10240!8i5120?entry=ttu
              '>(31.3374081,34.3470764)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.3476665,34.2809788,3a,75y,163.83h,96.1t/data=!3m8!1e1!3m6!1sAF1QipOOsBdAQJs6LYH88_Au41d1sKZm5k2ZsWsAo0cW!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOOsBdAQJs6LYH88_Au41d1sKZm5k2ZsWsAo0cW%3Dw203-h100-k-no-pi-0-ya147.38072-ro0-fo100!7i10240!8i5120?entry=ttu
              '>(31.3476665,34.2809788)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.3233515,34.3215476,3a,75y,25.09h,90t/data=!3m8!1e1!3m6!1sAF1QipPFBSf-8zJkU4JBYSfK3J9Su78glhgw8VUFcaOp!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPFBSf-8zJkU4JBYSfK3J9Su78glhgw8VUFcaOp%3Dw203-h100-k-no-pi-0-ya135.80142-ro-0-fo100!7i10240!8i5120?entry=ttu
              '>(31.3233515,34.3215476)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.3390217,34.241375,3a,75y,117.17h,127.28t/data=!3m8!1e1!3m6!1sAF1QipO0bLFvtgPM6pNqgVzPkSJKSDJltziwzCuFdglj!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO0bLFvtgPM6pNqgVzPkSJKSDJltziwzCuFdglj%3Dw203-h100-k-no-pi-0-ya166.27489-ro-0-fo100!7i5632!8i1558?entry=ttu
              '>(31.3390217,34.241375)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.2774296,34.2566468,3a,75y,285.67h,93.69t/data=!3m8!1e1!3m6!1sAF1QipPard_RnynEFR6S2u71gGFlpWUnDqZnWiCTUNFC!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPard_RnynEFR6S2u71gGFlpWUnDqZnWiCTUNFC%3Dw203-h100-k-no-pi-0-ya47.279465-ro-0-fo100!7i8192!8i4096?entry=ttu
              '>(31.2774296,34.2566468)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.2763062,34.2850355,3a,75y,261.55h,97.31t/data=!3m11!1e1!3m9!1sAF1QipPRdt7YYR8f7Of7CUbroVpRmrmQlnYc3yZwXQSp!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPRdt7YYR8f7Of7CUbroVpRmrmQlnYc3yZwXQSp%3Dw203-h100-k-no-pi-0-ya296.89175-ro-0-fo100!7i10240!8i5120!9m2!1b1!2i27?entry=ttu
              '>(31.2763062,34.2850355)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.4721103,34.4033519,3a,75y,270.2h,92.32t/data=!3m8!1e1!3m6!1sAF1QipORcxrbgZd1fzGA6GG2Nbt-8QLk03ptvWiFwor_!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipORcxrbgZd1fzGA6GG2Nbt-8QLk03ptvWiFwor_%3Dw203-h100-k-no-pi0-ya13.693545-ro-0-fo100!7i10240!8i5120?entry=ttu
              '>(31.4721103,34.4033519)</a>
              <br></br>
              <a href='https://www.google.com/maps/@31.3765183,34.3421349,3a,75y,27.37h,98.04t/data=!3m8!1e1!3m6!1sAF1QipNVnE7sasJmnOVKPam-BiLdB0zRxrRD5tLDvBmL!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNVnE7sasJmnOVKPam-BiLdB0zRxrRD5tLDvBmL%3Dw203-h100-k-no-pi-0-ya261.85416-ro0-fo100!7i8704!8i4352?entry=ttu'>(31.3765183,34.3421349)</a>
            </div>
          </body>
        </div>
        <div className='gitHubInfo'>
          <h2>
            deCAPTCHA
          </h2>
          <body>
            A parameterized clone of Google reCAPTCHA's v2 bot protection as a React component. Developed specifically for <i>somewhere in Gaza</i> (2023). Source code can be found <a href='https://github.com/adamwajahat/deCAPTCHA'>here</a>.
          </body>
        </div>
        <div className='tryAgain'>
          <h2>
            To try again, please refresh this page.
          </h2>
        </div>
      </div>)}
    </div>
  );
}

export default App;
