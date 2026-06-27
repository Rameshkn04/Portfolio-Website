import axios from "axios";

const USERNAME = "RameshKN04";

// We'll replace this URL with a working GraphQL endpoint later.
const API_URL = "";

export async function getLeetCodeStats() {
  try {
    const response = await axios.post(API_URL, {
      query: `
      query userProfile($username: String!) {
        matchedUser(username: $username) {
          username

          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }

          profile {
            ranking
          }
        }

        userContestRanking(username: $username) {
          rating
          globalRanking
        }
      }
      `,
      variables: {
        username: USERNAME,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("LeetCode Error:", error);
    return null;
  }
}