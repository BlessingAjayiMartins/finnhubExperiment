const one = ['BTX',  'UXIN',  'RHE',   'MNMD',  'AHT',   'GALT', 'JG',  
'TYHT', 'CLIR',  'VYNT',  'ENVB',  'CGA',   'UTL',  'GNW', 
'VTGN', 'XXII',  'CNTY',  'LAIX',  'DPW',   'BOXL', 'AKUS',
'PBI',  'CLOV',  'LIXT',  'HVT',   'EML',   'NCTY', 'SLCA',
'NVOS', 'LBRT',  'CYTH',  'HEXO',  'EVRI',  'HPK',  'WPG', 
'ATOS', 'MANH',  'HVT.A', 'CYBE',  'VSPRU', 'INM',  'SHOP',
'AMS',  'XAIR',  'NRGU',  'DB',    'VSPR',  'PRLD', 'XTLB',
'GSX',  'NBR',   'MSGM',  'ONCR',  'IDEX',  'DBD',  'GBOX',
'ANTE', 'ARKR',  'ONE',   'MARA',  'BSBR',  'VBLT', 'NEX',
'BLCM', 'NBSE',  'NOV',   'HYFM',  'SPRT',  'EQ',   'NCSM',
'ICD',  'CAAP',  'APHA',  'OGI',   'MOXC',  'SSY',  'BRY',
'DRIO', 'FTI',   'TLRY',  'GATO',  'LMNL',  'ADMA', 'MRKR',
'OII',  'ETH',   'VZIO',  'REAL',  'NOG',   'EM',   'NCR',
'TRCH', 'AMPY',  'BGNE',  'MUDSU', 'PUMP',  'UEC',  'SENS',
'DVN',  'DFHTU', 'WVVI',  'GRTX',  'VXRT', 'VER',   'CAPR', 'FLWS', 'SLN',
'OSTK',  'JAKK',  'OCUL', 'NOK',   'JCS',  'EZPW', 'BLMN',
'RLGY',  'MTRN',  'ENLV', 'MYRG',  'MTH',  'ONEW', 'PHX',
'NOA',   'LTRX',  'CCS',  'CYAD',  'MTDR', 'OVV',  'PRG',
'LACQU', 'CMII',  'KIRK', 'DLPN',  'LKQ',  'CAKE', 'BRPAU',
'VET',   'PIXY',  'ADS',  'ECHO',  'ATRC', 'CLR',  'HT',
'MRC',   'STZ.B', 'SUMR', 'HOFV',  'FB',   'TCI',  'GGO',
'REI',   'TIGO',  'OGCP', 'TSRI',  'GPRE', 'CPE',  'PSTI',
'VVV',   'RVPH',  'DPST', 'CKPT',  'THCB', 'NSPR', 'BWMX',
'CNMD',  'MN',    'UVE',  'NGA.U', 'HYAC', 'GUSH', 'ASPS',
'IPA',   'EXTR',  'BHE',  'VEDL',  'MLPO', 'VRNA', 'SNN',
'ASC',   'TKAT',  'LPI',  'HNI',   'LTBR', 'JJT',  'SGTX',
'CCOI',  'BTCM',  'PTEN',  'WVVI', 'MNMD',  'GRTX',  'METX', 'JAKK',  'VER',   'DLPN',
'FLWS', 'OCUL',  'RLGY',  'MRM',  'SLN',   'ATOS',  'JCS',
'CAPR', 'HVT.A', 'VSPRU', 'VXRT', 'NOK',   'ATRC',  'BLMN',
'MYRG', 'CCS',   'ADS',   'MTH',  'HYFM',  'NOA',   'CGA',
'OSTK', 'EXTR',  'EZPW',  'NTP',  'MRC',   'RRGB',  'CYAD',
'PIXY', 'LACQU', 'GPRE',  'SRL',  'BJRI',  'BRPAU', 'VACQU',
'MBIN', 'AXR',   'STZ.B', 'CLOV', 'CAKE',  'ROCCU', 'GGO',
'CCOI', 'MTDR',  'NVVE',  'VVV',  'KIRK',  'BHR',   'OGCP',
'TSRI', 'CTXR',  'MCRI',  'SMED', 'CMPS',  'GBOX',  'VEDL',
'TRIL', 'NSPR',  'FB',    'DSGN', 'LINK',  'NGA.U', 'MTRN',
'HYAC', 'PRG',   'PERI',  'OVV',  'TH',    'RGS',   'GNRC',
'HOFV', 'FISK',  'GDXD',  'SNN',  'RADA',  'MLPO',  'LKQ',
'FTSI', 'RVMD',  'LTBR',  'GTIM', 'BTCM',  'SLCA',  'CNSL',
'HT',   'CGRN',  'ONE',   'NAVI', 'BIO.B', 'WSO.B', 'RSVAU',
'VBFC', 'LBPS'

]
const two =['WVVI', 'MNMD',  'GRTX',  'METX', 'JAKK',  'VER',   'DLPN',
'FLWS', 'OCUL',  'RLGY',  'MRM',  'SLN',   'ATOS',  'JCS',
'CAPR', 'HVT.A', 'VSPRU', 'VXRT', 'NOK',   'ATRC',  'BLMN',
'MYRG', 'CCS',   'ADS',   'MTH',  'HYFM',  'NOA',   'CGA',
'OSTK', 'EXTR',  'EZPW',  'NTP',  'MRC',   'RRGB',  'CYAD',
'PIXY', 'LACQU', 'GPRE',  'SRL',  'BJRI',  'BRPAU', 'VACQU',
'MBIN', 'AXR',   'STZ.B', 'CLOV', 'CAKE',  'ROCCU', 'GGO',
'CCOI', 'MTDR',  'NVVE',  'VVV',  'KIRK',  'BHR',   'OGCP',
'TSRI', 'CTXR',  'MCRI',  'SMED', 'CMPS',  'GBOX',  'VEDL',
'TRIL', 'NSPR',  'FB',    'DSGN', 'LINK',  'NGA.U', 'MTRN',
'HYAC', 'PRG',   'PERI',  'OVV',  'TH',    'RGS',   'GNRC',
'HOFV', 'FISK',  'GDXD',  'SNN',  'RADA',  'MLPO',  'LKQ',
'FTSI', 'RVMD',  'LTBR',  'GTIM', 'BTCM',  'SLCA',  'CNSL',
'HT',   'CGRN',  'ONE',   'NAVI', 'BIO.B', 'WSO.B', 'RSVAU',
'VBFC', 'LBPS', 'TKAT', 'RMED',  'OCN',  'IPVA',
'ECHO', 'BWL.A', 'CLDX', 'CX',
'DISH', 'JDST',  'WHG',  'ENLV',
'DUST', 'SP',    'LABD', 'IPA',
'KDNY', 'TAP',   'SUMR', 'PBFX',
'LORL', 'FISI',  'PTR',  'TEVA',
'GURE']

const three = ['WVVI',  'MNMD',  'GRTX', 'JAKK', 'OCUL',  'FLWS',   'PIXY',
'VER',   'SLN',   'JCS',  'MRM',  'HVT.A', 'RLGY',   'DLPN',
'CAPR',  'ADS',   'CCS',  'NTP',  'MTH',   'MYRG',   'ATRC',
'NOA',   'OSTK',  'NOK',  'HYFM', 'VXRT',  'EZPW',   'GDXD',
'RMED',  'SCX',   'CMPS', 'EXTR', 'SMED',  'ATOS',   'KDNY',
'MRC',   'LACQU', 'GPRE', 'BLMN', 'BRPAU', 'OCN',    'GURE',
'VACQU', 'TAP',   'ECHO', 'IPVA', 'STZ.B', 'DISH',   'CTXR',
'ENLV',  'GBOX',  'GGO',  'TKAT', 'VVV',   'RVMD',   'LND',
'OGCP',  'CGA',   'JDST', 'FB',   'MTRN',  'VEDL',   'TRIL',
'INBX',  'MCRI',  'MBIN', 'NSPR', 'SUMR',  'BHR',    'NGA.U',
'HYAC',  'HQI',   'CAKE', 'EEIQ', 'WHG',   'FISK',   'ALXO',
'MLPO',  'CNSL',  'VS',   'DSGN', 'RADA',  'DUST',   'BIO.B',
'KIRK',  'BTCM',  'HOFV', 'CGRN', 'CX',    'ACIC.U', 'NSEC',
'WSO.B', 'VBFC',  'LABD', 'PTR',  'MXC',   'FST.U',  'DIN',
'YELL',  'RGS']

const stock = ['WVVI', 'MNMD',  'GRTX',  'METX', 'JAKK',  'VER',   'DLPN',
'FLWS', 'OCUL',  'RLGY',  'MRM',  'SLN',   'ATOS',  'JCS',
'CAPR', 'HVT.A', 'VSPRU', 'VXRT', 'NOK',   'ATRC',  'BLMN',
'MYRG', 'CCS',   'ADS',   'MTH',  'HYFM',  'NOA',   'CGA',
'OSTK', 'EXTR',  'EZPW',  'NTP',  'MRC',   'RRGB',  'CYAD',
'PIXY', 'LACQU', 'GPRE',  'SRL',  'BJRI',  'BRPAU', 'VACQU',
'MBIN', 'AXR',   'STZ.B', 'CLOV', 'CAKE',  'ROCCU', 'GGO',
'CCOI', 'MTDR',  'NVVE',  'VVV',  'KIRK',  'BHR',   'OGCP',
'TSRI', 'CTXR',  'MCRI',  'SMED', 'CMPS',  'GBOX',  'VEDL',
'TRIL', 'NSPR',  'FB',    'DSGN', 'LINK',  'NGA.U', 'MTRN',
'HYAC', 'PRG',   'PERI',  'OVV',  'TH',    'RGS',   'GNRC',
'HOFV', 'FISK',  'GDXD',  'SNN',  'RADA',  'MLPO',  'LKQ',
'FTSI', 'RVMD',  'LTBR',  'GTIM', 'BTCM',  'SLCA',  'CNSL',
'HT',   'CGRN',  'ONE',   'NAVI', 'BIO.B', 'WSO.B', 'RSVAU',
'VBFC', 'LBPS',  'WVVI',  'PIXY',  'MNMD',  'JAKK',  'GRTX',  'SLN',   'DLPN',
'FLWS',  'VER',   'MRM',   'OCUL',  'JCS',   'ATOS',  'ATRC',
'RLGY',  'CCS',   'HVT.A', 'ADS',   'NTP',   'HYFM',  'MTH',
'CGA',   'MYRG',  'HOFV',  'EXTR',  'NOK',   'BLMN',  'MRC',
'NOA',   'VXRT',  'TKAT',  'RMED',  'CAKE',  'CMPS',  'EZPW',
'GDXD',  'LACQU', 'GBOX',  'SMED',  'GPRE',  'BRPAU', 'VACQU',
'OCN',   'IPVA',  'OSTK',  'SRL',   'STZ.B', 'MBIN',  'ECHO',
'DSGN',  'AXR',   'VVV',   'BWL.A', 'ROCCU', 'CLDX',  'CX',
'DISH',  'CAPR',  'GGO',   'RRGB',  'CTXR',  'LBPS',  'JDST',
'WHG',   'OGCP',  'MCRI',  'ENLV',  'RVMD',  'TRIL',  'MTDR',
'NSPR',  'RADA',  'DUST',  'NGA.U', 'HYAC',  'BJRI',  'VEDL',
'FB',    'SP',    'FISK',  'MLPO',  'LABD',  'KIRK',  'BIO.B',
'IPA',   'CNSL',  'BTCM',  'KDNY',  'TAP',   'SUMR',  'CGRN',
'PBFX',  'LORL',  'FISI',  'PTR',   'TEVA',  'NAVI',  'GURE',
'WSO.B', 'VBFC'
]


const doThis = (stock) => {
let obj = {}
let result = []

  for (let a = 0 ; a < stock.length; a++) {
  if (obj[stock[a]] === undefined) {
    obj[stock[a]] = stock[a]
    result.push(stock[a])
  }
  }
  console.log(result.slice(100))
  // console.log(result.length)
  // console.log(result) 
}

doThis(stock)
// console.log(stock.length)