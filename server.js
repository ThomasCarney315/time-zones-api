const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 7777

app.use(cors())

const api = {
    'author': {
        'name': 'Thomas Carney',
        'website': 'thomascarney.dev'
    },

    'time zones': {
        '-12': {
            abbr: '-12',
            utc: '-12',
            description: 'GMT+12',
        },
        'sst': {
            abbr: 'SST',
            utc: '-11',
            description: 'Samoa Standard Time',
        },
        'hst': {
            abbr: 'HST',
            utc: '-10',
            description: 'Hawaii-Aleutian Standard Time',
        },
        'akst': {
            abbr: 'AKST',
            utc: '-9',
            description: 'Alaska Standard Time',
        },
        'pst': {
            abbr: 'PST',
            utc: '-8',
            description: 'Pacific Standard Time',
        },
        'mst': {
            abbr: 'MST',
            utc: '-7',
            description: 'Mountain Standard Time',
        },
        'cst': {
            abbr: 'CST',
            utc: '-6',
            description: 'Central Standard Time',
        },
        'est': {
            abbr: 'EST',
            utc: '-5',
            description: 'Eastern Standard Time',
        },
        'ast': {
            abbr: 'AST',
            utc: '-4',
            description: 'Atlantic Standard Time',
        },
        '-03': {
            abbr: '-03',
            utc: '-3',
            description: 'GMT+3',
        },
        '-02': {
            abbr: '-02',
            utc: '-2',
            description: 'GMT+2',
        },
        '-01': {
            abbr: '-01',
            utc: '-1',
            description: 'GMT+1',
        },
        'gmt': {
            abbr: 'GMT',
            utc: '+0',
            description: 'Greenwich Mean Time',
        },
        'cet': {
            abbr: 'CET',
            utc: '+1',
            description: 'Central European Time',
        },
        'cat': {
            abbr: 'CAT',
            utc: '+2',
            description: 'Central Africa Time',
        },
        'eat': {
            abbr: 'EAT',
            utc: '+3',
            description: 'East Africa Time',
        },
        '+04': {
            abbr: '+04',
            utc: '+4',
            description: 'GMT-4',
        },
        'pkt': {
            abbr: 'PKT',
            utc: '+5',
            description: 'Pakistan Standard Time',
        },
        '+06': {
            abbr: '+06',
            utc: '+6',
            description: 'GMT-6',
        },
        'wib': {
            abbr: 'WIB',
            utc: '+7',
            description: 'Western Indonesia Time',
        },
        'hkt': {
            abbr: 'HKT',
            utc: '+8',
            description: 'Hong Kong Time',
        },
        'jst': {
            abbr: 'JST',
            utc: '+9',
            description: 'Japan Standard Time',
        },
        'aest': {
            abbr: 'AEST',
            utc: '+10',
            description: 'Australian Eastern Standard Time',
        },
        '+11': {
            abbr: '+11',
            utc: '+11',
            description: 'GMT-11',
        },
        'nzst': {
            abbr: 'NZST',
            utc: '+12',
            description: 'New Zealand Standard Time ',
        },
        '+13': {
            abbr: '+13',
            utc: '+13',
            description: 'GMT-13',
        },
        '+14': {
            abbr: '+14',
            utc: '+14',
            description: 'GMT-14',
        },
    },
    'list of zones': [],
    'list with utc': [],
    'list detailed': [],
}

timeZones = api['time zones']
const zoneList = api['list of zones']
const utcList = api['list with utc']
const detailedList = api['list detailed']
 for (zone in timeZones ) {
    zoneList.push(timeZones[zone].abbr);
    utcList.push(`${timeZones[zone].abbr} (UTC ${timeZones[zone].utc.toString()})`);
    detailedList.push(`(UTC ${timeZones[zone].utc.toString()}) ${timeZones[zone].abbr} ${timeZones[zone].description}`);
 }

console.log(utcList)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(api)
})
app.get('/api/tz/:tz', (req, res) => {
    const tz = req.params.tz.toLowerCase()
    res.json(api['time zones'][tz])
})
app.get('/api/list', (req, res) => {
    res.json(api['list of zones'])
})
app.get('/api/utclist', (req, res) => {
    res.json(api['list with utc'])
})
app.get('/api/detailedlist', (req, res) => {
    res.json(api['list detailed'])
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on port ${PORT}`)
}) 