const { gql } = require('apollo-server');
module.exports = gql`
  type Attendee {
    attendance: Attendance!
    person: Person!
  }

  type Attendance {
    _id: ID!
    course: Course!
    time: String!
    date: String!
    mode: String!
  }

  type AttendanceListInCourse {
    course: Course!
    attendanceList: [Attendance!]
  }

  input attendanceInput {
    time: String!
    date: String!
    mode: String!
    courseID: String!
  }
  extend type Query {
    getAttendance(attendanceID: ID!): Attendance!
    getAttendanceListCountInCourse(courseID: String!): Int!
    getAttendanceListInCourse(courseID: String!, currPage: Int!, pageSize: Int!): AttendanceListInCourse!
  }
  extend type Mutation {
    createAttendance(attendanceInput: attendanceInput!): Attendance!
    deleteAttendance(attendanceID: ID!): Attendance!
  }
`;
