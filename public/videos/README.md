# Video Directory

To add your AI Introduction Video:
1. Place your exported video file in this directory (for example: `intro.mp4`).
2. Open `src/data/portfolioData.ts`.
3. Set the `videoUrl` property under `video`:
   ```ts
   video: {
     ...
     videoUrl: "/videos/intro.mp4",
     isPlaceholder: false,
     ...
   }
   ```
4. Optionally, you can also place a poster image in `public/videos/poster.jpg` and set `posterUrl: "/videos/poster.jpg"`.
