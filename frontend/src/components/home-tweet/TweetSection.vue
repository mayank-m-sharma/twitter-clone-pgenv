<template>
  <div>
    <div
      v-bind:key="tweet.id"
      v-for="tweet in tweets"
      class="flex flex-row p-5 rounded-lg hover:bg-lightest transform transition duration-200 ease-out"
    >
      <!-- Block 1 - Top left avatar Img -->
      <img
        class="h-10 w-10 rounded-full"
        v-bind:src="tweet.avatar"
        alt="avatar"
      />
      <!-- Block 2 -  -->
      <div class="pl-5 flex flex-col justify-between">
        <!-- block 1 - | name username . time posted -->
        <div class="pb-1 flex flex-row w-1/2">
          <p class="font-bold mr-1">{{ tweet.name }}</p>
          <p class="text-sm mr-2">{{ tweet.username }}</p>
          <img
            class="h-1 w-1 mt-2 opacity-1"
            src="../../assets/dot.png"
            alt=""
          />
          <p class="text-sm ml-2">2h</p>
        </div>
        <!-- block 2 - | Tweet paragraph -->
        <p class="pb-3">
          {{ tweet.tweetBody }}
        </p>
        <!-- block 3 - | Tweet media -->
        <div>
          <img
            class="rounded-lg h-full w-full"
            v-bind:src="tweet.tweetMedia"
            alt=""
          />
        </div>
        <!-- block 4 - | Tweet action buttons -->
        <div class="flex flex-row pt-3 pl-12 pr-12 justify-between">
          <div class="flex flex-row justify-between items-center">
            <img class="h-4 w-4" src="../../assets/reply.png" alt="" />
            <p class="text-sm ml-3 text-grey">32</p>
          </div>
          <div class="flex flex-row justify-between items-center">
            <img class="h-4 w-4" src="../../assets/retweet.png" alt="" />
            <p class="text-sm ml-3 text-grey">56.3k</p>
          </div>
          <div class="flex flex-row justify-between items-center">
            <img class="h-4 w-4" src="../../assets/heart.png" alt="" />
            <p class="text-sm ml-3 text-grey">18</p>
          </div>
          <div class="flex flex-row justify-between items-center">
            <img class="h-4 w-4" src="../../assets/upload.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TweetSection",
  data() {
    return {
      tweets: [
        {
          id: 1,
          name: "Kunal Shah",
          username: "@kunalshah1",
          avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
          tweetMedia:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
          replyCount: 32,
          retweetCount: 54300,
          heartsCount: 18600,
          timestamp: "2h",
          tweetBody:
            "US to deploy troops to Eastern Europe as tensions continue between Russia and Ukraine",
        },
        {
          id: 2,
          name: "Ravish Jha",
          username: "@rravish",
          avatar: "https://randomuser.me/api/portraits/men/75.jpg",
          tweetMedia:
            "https://media.istockphoto.com/photos/cute-kitten-licking-glass-table-with-copy-space-picture-id1293763250?b=1&k=20&m=1293763250&s=170667a&w=0&h=zcK63xxkMVX-ca0d5laTsDxauVUMH62F71MKcbqaGnI=",
          replyCount: 32,
          retweetCount: 54300,
          heartsCount: 18600,
          timestamp: "2h",
          tweetBody:
            "US to deploy troops to Eastern Europe as tensions continue between Russia and Ukraine",
        },
        {
          id: 3,
          name: "Anita Mittal",
          username: "@mittalanita",
          avatar: "https://randomuser.me/api/portraits/men/76.jpg",
          tweetMedia:
            "https://c.tenor.com/3a_P4RHq2zUAAAAM/mera-expertise-bilkul-nahi-hai-shark-tank.gif",
          replyCount: 32,
          retweetCount: 54300,
          heartsCount: 18600,
          timestamp: "2h",
          tweetBody:
            "US to deploy troops to Eastern Europe as tensions continue between Russia and Ukraine",
        },
        {
          id: 1,
          name: "Kunal Shah",
          username: "@kunalshah1",
          avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
          tweetMedia:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
          replyCount: 32,
          retweetCount: 54300,
          heartsCount: 18600,
          timestamp: "2h",
          tweetBody:
            "US to deploy troops to Eastern Europe as tensions continue between Russia and Ukraine",
        },
      ],
    };
  },
};
</script>

<style></style>
