const { gql } = require("apollo-server");

module.exports = gql`
  type Trx {
    _id: ID!
    attendance: Attendance!
    student: Person!
    createdAt: String!
    updatedAt: String!
  }

  input trxInput{
      attendanceID: ID!
      studentID: ID!
  }

  extend type Query {
    getTrx(trxInput: trxInput!): Trx!
    getTrxListInAttendance(attendanceID: ID!): [Trx!]
  }

  extend type Mutation {
    createTrx(trxInput: trxInput!): String!
  }
`;
