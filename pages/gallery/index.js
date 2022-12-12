import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "./GalleryPage.module.css";
import Image from "next/image"
import image47 from './images/image47.png'
import image48 from './images/image48.png'
import image49 from './images/image49.png'
import image50 from './images/image50.png'
import image51 from './images/image51.png'
import image52 from './images/image52.png'
import image53 from './images/image53.png'
import image54 from './images/image54.png'
import image83 from './images/image83.png'
import image84 from './images/image84.png'
import image85 from './images/image85.png'
import image86 from './images/image86.png'
import image11 from './images/image11.png'
import image12 from './images/image12.png'
import image13 from './images/image13.png'
import image14 from './images/image14.png'
import image15 from './images/image15.png'
import image16 from './images/image16.png'
import image17 from './images/image17.png'
import image18 from './images/image18.png'
import image19 from './images/image19.png'
import image20 from './images/image20.png'
import image21 from './images/image21.png'
import image22 from './images/image22.png'
import image23 from './images/image23.png'
import image24 from './images/image24.png'
import image25 from './images/image25.png'
import image26 from './images/image26.png'
import image27 from './images/image27.png'
import image28 from './images/image28.png'
import image29 from './images/image29.png'
import image30 from './images/image30.png'
import image31 from './images/image31.png'
import image32 from './images/image32.png'
import image33 from './images/image33.png'
import image34 from './images/image34.png'
import image35 from './images/image35.png'
import image36 from './images/image36.png'
import image37 from './images/image37.png'
import image38 from './images/image38.png'
import image39 from './images/image39.png'
import image40 from './images/image40.png'
import image41 from './images/image41.png'
import image42 from './images/image42.png'
import image43 from './images/image43.png'
import image44 from './images/image44.png'
import image45 from './images/image45.png'
import image46 from './images/image46.png'
import image55 from './images/image55.png'
import image56 from './images/image56.png'
import image57 from './images/image57.png'
import image58 from './images/image58.png'
import image59 from './images/image59.png'
import image60 from './images/image60.png'
import image61 from './images/image61.png'
import image62 from './images/image62.png'
import image63 from './images/image63.png'
import image64 from './images/image64.png'
import image65 from './images/image65.png'
import image66 from './images/image66.png'
import image67 from './images/image67.png'
import image68 from './images/image68.png'
import image69 from './images/image69.png'
import image70 from './images/image70.png'
import image71 from './images/image71.png'
import image72 from './images/image72.png'
import image73 from './images/image73.png'
import image74 from './images/image74.png'
import image75 from './images/image75.png'
import image76 from './images/image76.png'
import image77 from './images/image77.png'
import image78 from './images/image78.png'
import image79 from './images/image79.png'
import image80 from './images/image80.png'
import image81 from './images/image81.png'
import image82 from './images/image82.png'
import image87 from './images/image87.png'
import image88 from './images/image88.png'
import image89 from './images/image89.png'
import image90 from './images/image90.png'
import image91 from './images/image91.png'
import image92 from './images/image92.png'
import image93 from './images/image93.png'
import image94 from './images/image94.png'
import image95 from './images/image95.png'
import image96 from './images/image96.png'
import image97 from './images/image97.png'
import image98 from './images/image98.png'
import image99 from './images/image99.png'
import image100 from './images/image100.png'
import image101 from './images/image101.png'
import image102 from './images/image102.png'
import image103 from './images/image103.png'
import image104 from './images/image104.png'
import image105 from './images/image105.png'
import image106 from './images/image106.png'
import image107 from './images/image107.png'
import image108 from './images/image108.png'
import image109 from './images/image109.png'
import image110 from './images/image110.png'
import image111 from './images/image111.png'
import image112 from './images/image112.png'
import image113 from './images/image113.png'
import image114 from './images/image114.png'
import image115 from './images/image115.png'
import image116 from './images/image116.png'
import image117 from './images/image117.png'
import image118 from './images/image118.png'
import image119 from './images/image119.png'
import image120 from './images/image120.png'
import image121 from './images/image121.png'
import image122 from './images/image122.png'
import image123 from './images/image123.png'
import image124 from './images/image124.png'
import image125 from './images/image125.png'
import image126 from './images/image126.png'
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import image6 from './images/image6.png'
import image7 from './images/image7.png'
import image8 from './images/image8.png'
import image9 from './images/image9.png'
import image10 from './images/image10.png'

import Canvas_1 from "./images/Canvas_1.png"
import Canvas_2 from "./images/Canvas_2.png"
import Canvas_3 from "./images/Canvas_3.png"
import Canvas_4 from "./images/Canvas_4.png"
import Canvas_5 from "./images/Canvas_5.png"
import Canvas_6 from "./images/Canvas (6).png"
import Canvas_7 from "./images/Canvas (7).png"
import Canvas_8 from "./images/Canvas (8).png"
import Canvas_9 from "./images/Canvas (9).png"
import Canvas_10 from "./images/Canvas (10).png"
import Canvas_11 from "./images/Canvas (11).png"
import Canvas_12 from "./images/Canvas (12).png"
import Canvas_13 from "./images/Canvas (13).png"
import Canvas_14 from "./images/Canvas (14).png"
import Canvas_15 from "./images/Canvas (15).png"
import Canvas_16 from "./images/Canvas (16).png"
import Canvas_17 from "./images/Canvas (17).png"
import Canvas_18 from "./images/Canvas (18).png"
import Canvas_19 from "./images/Canvas (19).png"
import Canvas_20 from "./images/Canvas (20).png"
import Canvas_21 from "./images/Canvas (21).png"
import Canvas_22 from "./images/Canvas (22).png"
import Canvas_23 from "./images/Canvas (23).png"
import Canvas_24 from "./images/Canvas (24).png"
import Canvas_25 from "./images/Canvas (25).png"
import Canvas_26 from "./images/Canvas (26).png"
import Canvas_27 from "./images/Canvas (27).png"
import Canvas_28 from "./images/Canvas (28).png"
import Canvas_29 from "./images/Canvas (29).png"
import Canvas_30 from "./images/Canvas (30).png"
import Canvas_31 from "./images/Canvas (31).png"
import Canvas_32 from "./images/Canvas (32).png"
import Canvas_33 from "./images/Canvas (33).png"
import Canvas_34 from "./images/Canvas (34).png"
import Canvas_35 from "./images/Canvas (35).png"
import Canvas_36 from "./images/Canvas (36).png"
import Canvas_37 from "./images/Canvas (37).png"
import Canvas_38 from "./images/Canvas (38).png"
import Canvas_39 from "./images/Canvas (39).png"
import Canvas_40 from "./images/Canvas (40).png"
import Canvas_41 from "./images/Canvas (41).png"
import Canvas_42 from "./images/Canvas (42).png"
import Canvas_43 from "./images/Canvas (43).png"
import Canvas_44 from "./images/Canvas (44).png"
import Canvas_45 from "./images/Canvas (45).png"
import Canvas_46 from "./images/Canvas (46).png"
import Canvas_47 from "./images/Canvas (47).png"
import Canvas_48 from "./images/Canvas (48).png"
import Canvas_49 from "./images/Canvas (49).png"
import Canvas_50 from "./images/Canvas (50).png"
import Canvas_51 from "./images/Canvas (51).png"
import Canvas_52 from "./images/Canvas (52).png"
import Canvas_53 from "./images/Canvas (53).png"
import Canvas_54 from "./images/Canvas (54).png"
import Canvas_55 from "./images/Canvas (55).png"
import Canvas_56 from "./images/Canvas (56).png"
import Canvas_57 from "./images/Canvas (57).png"
import Canvas_58 from "./images/Canvas (58).png"
import Canvas_59 from "./images/Canvas (59).png"
import Canvas_60 from "./images/Canvas (60).png"
import Canvas_61 from "./images/Canvas (61).png"
import Canvas_62 from "./images/Canvas (62).png"
import Canvas_63 from "./images/Canvas (63).png"
import Canvas_64 from "./images/Canvas (64).png"
import Canvas_65 from "./images/Canvas (65).png"
import Canvas_66 from "./images/Canvas (66).png"
import Canvas_67 from "./images/Canvas (67).png"
import Canvas_68 from "./images/Canvas (68).png"
import Canvas_69 from "./images/Canvas (69).png"
import Canvas_70 from "./images/Canvas (70).png"
import Canvas_71 from "./images/Canvas (71).png"
import Canvas_72 from "./images/Canvas (72).png"
import Canvas_73 from "./images/Canvas (73).png"
import Canvas_74 from "./images/Canvas (74).png"
import Canvas_75 from "./images/Canvas (75).png"
import Canvas_76 from "./images/Canvas (76).png"
import Canvas_77 from "./images/Canvas (77).png"
import Canvas_78 from "./images/Canvas (78).png"
import Canvas_79 from "./images/Canvas (79).png"
import Canvas_80 from "./images/Canvas (80).png"
import Canvas_81 from "./images/Canvas (81).png"
import Canvas_82 from "./images/Canvas (82).png"
import Canvas_83 from "./images/Canvas (83).png"
import Canvas_84 from "./images/Canvas (84).png"
import Canvas_85 from "./images/Canvas (85).png"
import Canvas_86 from "./images/Canvas (86).png"
import Canvas_87 from "./images/Canvas (87).png"
import Canvas_88 from "./images/Canvas (88).png"
import Canvas_89 from "./images/Canvas (89).png"
import Canvas_90 from "./images/Canvas (90).png"
import Canvas_91 from "./images/Canvas (91).png"
import Canvas_92 from "./images/Canvas (92).png"
import Canvas_93 from "./images/Canvas (93).png"
import Canvas_94 from "./images/Canvas (94).png"
import Canvas_95 from "./images/Canvas (95).png"
import Canvas_96 from "./images/Canvas (96).png"
import Canvas_97 from "./images/Canvas (97).png"
import Canvas_98 from "./images/Canvas (98).png"
import Canvas_99 from "./images/Canvas (99).png"
import Canvas_100 from "./images/Canvas (100).png"
import Canvas_101 from "./images/Canvas (101).png"
import Canvas_102 from "./images/Canvas (102).png"
import Canvas_103 from "./images/Canvas (103).png"
import Canvas_104 from "./images/Canvas (104).png"
import Canvas_105 from "./images/Canvas (105).png"
import Canvas_106 from "./images/Canvas (106).png"
import Canvas_107 from "./images/Canvas (107).png"
import Canvas_108 from "./images/Canvas (108).png"
import Canvas_109 from "./images/Canvas (109).png"
import Canvas_110 from "./images/Canvas (110).png"
import Canvas_111 from "./images/Canvas (111).png"
import Canvas_112 from "./images/Canvas (112).png"
import Canvas_113 from "./images/Canvas (113).png"
import Canvas_114 from "./images/Canvas (114).png"
import Canvas_115 from "./images/Canvas (115).png"
import Canvas_116 from "./images/Canvas (116).png"
import Canvas_117 from "./images/Canvas (117).png"
import Canvas_118 from "./images/Canvas (118).png"
import Canvas_119 from "./images/Canvas (119).png"
import Canvas_120 from "./images/Canvas (120).png"
import Canvas_121 from "./images/Canvas (121).png"
import Canvas_122 from "./images/Canvas (122).png"
import Canvas_123 from "./images/Canvas (123).png"
import Canvas_124 from "./images/Canvas (124).png"
import Canvas_125 from "./images/Canvas (125).png"
import Canvas_126 from "./images/Canvas (126).png"
import Canvas_127 from "./images/Canvas (127).png"
import Canvas_128 from "./images/Canvas (128).png"
import Canvas_129 from "./images/Canvas (129).png"
import Canvas_130 from "./images/Canvas (130).png"
import Canvas_131 from "./images/Canvas (131).png"
import Canvas_132 from "./images/Canvas (132).png"
import Canvas_133 from "./images/Canvas (133).png"
import Canvas_134 from "./images/Canvas (134).png"
import Canvas_135 from "./images/Canvas (135).png"
import Canvas_136 from "./images/Canvas (136).png"
import Canvas_137 from "./images/Canvas (137).png"
import Canvas_138 from "./images/Canvas (138).png"
import Canvas_139 from "./images/Canvas (139).png"
import Canvas_140 from "./images/Canvas (140).png"
import Canvas_141 from "./images/Canvas (141).png"
import Canvas_142 from "./images/Canvas (142).png"
import Canvas_143 from "./images/Canvas (143).png"
import Canvas_144 from "./images/Canvas (144).png"
import Canvas_145 from "./images/Canvas (145).png"
import Canvas_146 from "./images/Canvas (146).png"
import Canvas_147 from "./images/Canvas (147).png"
import Canvas_148 from "./images/Canvas (148).png"
import Canvas_149 from "./images/Canvas (149).png"
import Canvas_150 from "./images/Canvas (150).png"
import Canvas_151 from "./images/Canvas (151).png"
import Canvas_152 from "./images/Canvas (152).png"
import Canvas_153 from "./images/Canvas (153).png"
import Canvas_154 from "./images/Canvas (154).png"
import Canvas_155 from "./images/Canvas (155).png"
import Canvas_156 from "./images/Canvas (156).png"
import Canvas_157 from "./images/Canvas (157).png"
import Canvas_158 from "./images/Canvas (158).png"
import Canvas_159 from "./images/Canvas (159).png"
import Canvas_160 from "./images/Canvas (160).png"
import Canvas_161 from "./images/Canvas (161).png"
import Canvas_162 from "./images/Canvas (162).png"
import Canvas_163 from "./images/Canvas (163).png"
import Canvas_164 from "./images/Canvas (164).png"
import Canvas_165 from "./images/Canvas (165).png"
import Canvas_166 from "./images/Canvas (166).png"
import Canvas_167 from "./images/Canvas (167).png"
import Canvas_168 from "./images/Canvas (168).png"
import Canvas_169 from "./images/Canvas (169).png"
import Canvas_170 from "./images/Canvas (170).png"
import Canvas_171 from "./images/Canvas (171).png"
import Canvas_172 from "./images/Canvas (172).png"
import Canvas_173 from "./images/Canvas (173).png"
import Canvas_174 from "./images/Canvas (174).png"
import Canvas_175 from "./images/Canvas (175).png"
import Canvas_176 from "./images/Canvas (176).png"
import Canvas_177 from "./images/Canvas (177).png"
import Canvas_178 from "./images/Canvas (178).png"
import Canvas_179 from "./images/Canvas (179).png"
import Canvas_180 from "./images/Canvas (180).png"
import Canvas_181 from "./images/Canvas (181).png"
import Canvas_182 from "./images/Canvas (182).png"
import Canvas_183 from "./images/Canvas (183).png"
import Canvas_184 from "./images/Canvas (184).png"
import Canvas_185 from "./images/Canvas (185).png"
import Canvas_186 from "./images/Canvas (186).png"
import Canvas_187 from "./images/Canvas (187).png"
import Canvas_188 from "./images/Canvas (188).png"
import Canvas_189 from "./images/Canvas (189).png"
import Canvas_190 from "./images/Canvas (190).png"
import Canvas_191 from "./images/Canvas (191).png"
import Canvas_192 from "./images/Canvas (192).png"
import Canvas_193 from "./images/Canvas (193).png"
import Canvas_194 from "./images/Canvas (194).png"
import Canvas_195 from "./images/Canvas (195).png"
import Canvas_196 from "./images/Canvas (196).png"
import Canvas_197 from "./images/Canvas (197).png"
import Canvas_198 from "./images/Canvas (198).png"
import Canvas_199 from "./images/Canvas (199).png"
import Canvas_200 from "./images/Canvas (200).png"
import Canvas_201 from "./images/Canvas (201).png"
import Canvas_202 from "./images/Canvas (202).png"
import Canvas_203 from "./images/Canvas (203).png"
import Canvas_204 from "./images/Canvas (204).png"
import Canvas_205 from "./images/Canvas (205).png"
import Canvas_206 from "./images/Canvas (206).png"
import Canvas_207 from "./images/Canvas (207).png"
import Canvas_208 from "./images/Canvas (208).png"
import Canvas_209 from "./images/Canvas (209).png"
import Canvas_210 from "./images/Canvas (210).png"
import Canvas_211 from "./images/Canvas (211).png"
import Canvas_212 from "./images/Canvas (212).png"
import Canvas_213 from "./images/Canvas (213).png"
import Canvas_214 from "./images/Canvas (214).png"
import Canvas_215 from "./images/Canvas (215).png"
import Canvas_216 from "./images/Canvas (216).png"
import Canvas_217 from "./images/Canvas (217).png"

const image_width = '500'
const image_heigth = '500'

export default function GalleryPage() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Gallery</h1>
        <div className={styles.grid}>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_1} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_2} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_3} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_4} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_5} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_6} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_7} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_8} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_9} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_10} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_11} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_12} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_13} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_14} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_15} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_16} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_17} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_18} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_19} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_20} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_21} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_22} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_23} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_24} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_25} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_26} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_27} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_28} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_29} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_30} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_31} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_32} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_33} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_34} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_35} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_36} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_37} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_38} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_39} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_40} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_41} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_42} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_43} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_44} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_45} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_46} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_47} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_48} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_49} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_50} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_51} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_52} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_53} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_54} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_55} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_56} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_57} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_58} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_59} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_60} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_61} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_62} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_63} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_64} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_65} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_66} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_67} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_68} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_69} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_70} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_71} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_72} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_73} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_74} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_75} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_76} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_77} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_78} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_79} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_80} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_81} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_82} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_83} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_84} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_85} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_86} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_87} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_88} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_89} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_90} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_91} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_92} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_93} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_94} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_95} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_96} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_97} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_98} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_99} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_100} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_101} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_102} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_103} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_104} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_105} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_106} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_107} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_108} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_109} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_110} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_111} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_112} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_113} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_114} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_115} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_116} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_117} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_118} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_119} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_120} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_121} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_122} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_123} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_124} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_125} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_126} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_127} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_128} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_129} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_130} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_131} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_132} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_133} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_134} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_135} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_136} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_137} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_138} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_139} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_140} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_141} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_142} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_143} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_144} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_145} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_146} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_147} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_148} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_149} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_150} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_151} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_152} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_153} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_154} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_155} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_156} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_157} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_158} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_159} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_160} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_161} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_162} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_163} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_164} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_165} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_166} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_167} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_168} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_169} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_170} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_171} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_172} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_173} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_174} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_175} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_176} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_177} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_178} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_179} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_180} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_181} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_182} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_183} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_184} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_185} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_186} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_187} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_188} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_189} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_190} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_191} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_192} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_193} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_194} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_195} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_196} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_197} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_198} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_199} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_200} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_201} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_202} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_203} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_204} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_205} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_206} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_207} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_208} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_209} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_210} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_211} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_212} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_213} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_214} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_215} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_216} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={Canvas_217} alt='AI Tattoo' width={image_width} height={image_heigth}/></div>


            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image47} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image48} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image49} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image50} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image51} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image52} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image53} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
            <Image className={styles.imgPreview} src={image54} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image83} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image84} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image85} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image86} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image11} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image12} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image13} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image14} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image15} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image16} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image17} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image18} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image19} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image20} alt='AI Tattoo' width={image_width} height={image_heigth}/>
            </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image21} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image22} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image23} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image24} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image25} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image26} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image27} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image28} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image29} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image30} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image31} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image32} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image33} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image34} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image35} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image36} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image37} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image38} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image39} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image40} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image41} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image42} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image43} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image44} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image45} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image46} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image55} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image56} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image57} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image58} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image59} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image60} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image61} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image62} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image63} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image64} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image65} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image66} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image67} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image68} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image69} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image70} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image71} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image72} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image73} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image74} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image75} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image76} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image77} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image78} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image79} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image80} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image81} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image82} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image87} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image88} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image89} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image90} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image91} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image92} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image93} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image94} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image95} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image96} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image97} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image98} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image99} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image100} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image101} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image102} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image103} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image104} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image105} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image106} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image107} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image108} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image109} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image110} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image111} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image112} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image113} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image114} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image115} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image116} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image117} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image118} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image119} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image120} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image121} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image122} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image123} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image124} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image125} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image126} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image1} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image2} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image3} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image4} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image5} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image6} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image7} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image8} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image9} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image10} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
        </div>
      </main>
    </div>
  );
}