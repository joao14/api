const server = require('../app')
const chai = require('chai')
const expect = require('chai').expect
const chaiHttp = require('chai-http')

chai.should()

chai.use(chaiHttp)

describe('Files suites', () => {

    /**Test the GET route */
    describe('GET /api/v1/files/data', () => {
        it('It should GET all the data', (done) => {
            chai.request(server).get("/api/v1/files/data").end((err, response) => {
                response.should.have.status(200)
                response.body.should.be.a('array')
                response.body.length.should.be.eq(3)
                response.body.forEach((file) => {
                    file.lines.forEach(line => {
                        line.should.have.property("text")
                        line.should.have.property("number")
                        line.should.have.property("hex")
                        expect(line.text).to.be.a('string')
                        expect(+line.number).to.be.a('number')
                        expect(line.hex).to.have.length(32)
                    });
                });
                done();
            })
        })

    })

    /**Test the GET route */
    describe('GET /api/v1/files/list', () => {
        it('It should GET all files of service', (done) => {
            chai.request(server).get("/api/v1/files/list").end((err, response) => {
                response.should.have.status(200)
                response.body.should.have.property("files")
                done();
            })
        })

    })


})