const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Icarus Joining Process Tests', () => {
    before(async () => {
        // TODO: Connect to a test database
    });

    after(async () => {
        // TODO: Disconnect from the test database
    });

    beforeEach(async () => {
        // TODO: Clear the Applicant collection before each test
    });

    describe('POST /applicants', () => {
        it('should create a new applicant', async () => {
            const res = await chai.request(app)
                .post('/applicants')
                .send({ name: 'John Doe', email: 'john@example.com' });

            expect(res).to.have.status(201);
            expect(res.body).to.have.property('name', 'John Doe');
            expect(res.body).to.have.property('email', 'john@example.com');
            expect(res.body).to.have.property('status', 'applied');
        });
    });

    describe('PUT /applicants/:id/review', () => {
        it('should simulate the review process and accept an applicant', async () => {
            const res = await chai.request(app)
                .put(`/applicants/1/review`);

            expect(res).to.have.status(200);
            expect(res.body).to.have.property('status', 'accepted');
        });
    });

    describe('PUT /fix-joining-process', () => {
        it('should fix the joining process by rejecting stuck applicants', async () => {
            const res = await chai.request(app)
                .put('/fix-joining-process');

            expect(res).to.have.status(200);
            expect(res.body).to.have.property('message', 'Joining process fixed successfully.');
        });
    });
});
