/**
 * AM2320 temperature and humidity sensor package for microbit Makecode.
 */

    
namespace SGBotic {
    let AM2320_I2C_ADDR = 0x5C 
    let AM2320_CMD_READREG = 0x03
    let AM2320_REG_TEMP_H = 0x02
    let AM2320_REG_TEMP_L = 0x03
    let AM2320_REG_HUM_H = 0x00
    let AM2320_REG_HUM_L = 0x01
    
    /**
     * read temperature
     */
    //% subcategory=AM2320 Sensor
    //% blockId="AM2320_getTemperature" block="temperature"
    //% weight=100 blockGap=3 
    export function readTemperature(): number {
        pins.i2cWriteNumber(AM2320_I2C_ADDR, 0x0, NumberFormat.UInt8BE)
        basic.pause(1) 
        pins.i2cWriteNumber(AM2320_I2C_ADDR, 0x0, NumberFormat.UInt8BE)
        basic.pause(1) 
       
        let writebuf = pins.createBuffer(3)
        writebuf[0] = AM2320_CMD_READREG
        writebuf[1] = AM2320_REG_TEMP_H
        writebuf[2] = 0x02
        pins.i2cWriteBuffer(AM2320_I2C_ADDR, writebuf)
        basic.pause(2)  
        
        let readbuf = pins.i2cReadBuffer(AM2320_I2C_ADDR, pins.sizeOf(NumberFormat.UInt8BE) * 6)
            
        let ret : number
        ret = readbuf[2]
        ret = (ret << 8) | readbuf[3]
        return (ret)
    }
    
    /**
     * read humidity
     */
    //% subcategory=AM2320 Sensor
    //% blockId="AM2320_getHumidity" block="humidity"
    //% weight=90 blockGap=3 
    export function readHumidity(): number {
        pins.i2cWriteNumber(AM2320_I2C_ADDR, 0x0, NumberFormat.UInt8BE)
        basic.pause(1) 
        pins.i2cWriteNumber(AM2320_I2C_ADDR, 0x0, NumberFormat.UInt8BE)
        basic.pause(1) 
       
        let writebuf = pins.createBuffer(3)
        writebuf[0] = AM2320_CMD_READREG
        writebuf[1] = AM2320_REG_HUM_H
        writebuf[2] = 0x02
        pins.i2cWriteBuffer(AM2320_I2C_ADDR, writebuf)
        basic.pause(2)  
        
        let readbuf = pins.i2cReadBuffer(AM2320_I2C_ADDR, pins.sizeOf(NumberFormat.UInt8BE) * 6)
     
        let ret : number
        ret = readbuf[2]
        ret = (ret << 8) | readbuf[3]  
        return (ret)
    }
    
    
}