# How to Add LinkedIn Recommendations

## 📋 Step-by-Step Guide

### Step 1: Get Your LinkedIn Recommendations

1. Go to your LinkedIn profile: https://www.linkedin.com/in/nishanththomas/
2. Scroll down to the **"Recommendations"** section
3. Click **"Show all recommendations"**
4. For each recommendation you want to add:
   - Copy the person's name
   - Copy their title and company
   - Copy the recommendation text
   - Note your relationship (e.g., "John managed Nishanth directly")

### Step 2: Edit the Recommendations Component

Open the file: `components/recommendations-section.tsx`

Find the `recommendations` array (around line 15) and replace the placeholder data:

```typescript
const recommendations: Recommendation[] = [
  {
    name: "Person's Full Name",
    title: "Their Job Title",
    company: "Their Company Name",
    relationship: "How you worked together (e.g., 'Managed Nishanth directly', 'Worked with Nishanth on the same team')",
    text: "The full recommendation text from LinkedIn",
    image: "/placeholder-user.jpg"  // Optional: add their profile photo
  },
  {
    name: "Another Person",
    title: "Their Title",
    company: "Their Company",
    relationship: "Your relationship",
    text: "Their recommendation text",
    image: "/placeholder-user.jpg"
  },
  // Add as many as you want
]
```

### Step 3: Example with Real Data

Here's an example of how it should look with real data:

```typescript
const recommendations: Recommendation[] = [
  {
    name: "Sarah Johnson",
    title: "VP of Engineering",
    company: "Red Hat",
    relationship: "Sarah managed Nishanth directly",
    text: "Nishanth is an exceptional engineering leader who consistently delivers results. His ability to build and scale teams is remarkable. Under his leadership, our UI team grew from 3 to 15 engineers while maintaining high quality and meeting all deadlines. I highly recommend Nishanth for any senior engineering leadership role.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Michael Chen",
    title: "Senior Product Manager",
    company: "IBM",
    relationship: "Michael worked with Nishanth on the same team",
    text: "Working with Nishanth on the OpenShift Data Foundation was a fantastic experience. His technical expertise combined with excellent communication skills made cross-functional collaboration seamless. He's particularly strong at translating complex technical concepts for non-technical stakeholders.",
    image: "/placeholder-user.jpg"
  },
]
```

### Step 4: Optional - Add Profile Photos

If you want to add profile pictures:

1. Save the person's LinkedIn profile photo
2. Name it something like: `recommendation-person-name.jpg`
3. Put it in the `public` folder
4. Update the `image` field: `image: "/recommendation-person-name.jpg"`

If you skip this, it will show their initials in a nice circle instead!

### Step 5: How Many to Add?

**Recommended:** 4-8 recommendations
- Shows diversity of endorsements
- Keeps the section concise and impactful
- Choose recommendations that highlight different skills

**Quality over quantity!** Pick recommendations that:
- Mention specific achievements
- Come from different levels (managers, peers, direct reports)
- Highlight different aspects of your leadership

### Step 6: Commit and Deploy

After adding your recommendations:

```bash
cd /Users/nishanth/VibeCoding/nishanth-profile

# Check what changed
git status

# Add the changes
git add components/recommendations-section.tsx

# Commit
git commit -m "feat: add LinkedIn recommendations"

# Push to deploy
git push
```

Vercel will automatically deploy your updated site! 🚀

---

## 🎨 Current Design Features

Your recommendations section includes:
- ✅ Beautiful card layout
- ✅ Avatar with initials fallback
- ✅ Person's name, title, and company
- ✅ Relationship context
- ✅ Quoted recommendation text
- ✅ Quote icon for visual emphasis
- ✅ Star icon in section header
- ✅ Link to view all recommendations on LinkedIn
- ✅ Responsive design for mobile

---

## 📝 Template to Fill Out

Use this template for each recommendation:

```typescript
{
  name: "",
  title: "",
  company: "",
  relationship: "",  // Choose from: "Managed Nishanth directly", "Reported to Nishanth", "Worked with Nishanth on the same team"
  text: "",
  image: "/placeholder-user.jpg"
},
```

---

## 💡 Pro Tips

1. **Keep it diverse:** Mix recommendations from managers, peers, and direct reports
2. **Show impact:** Choose recommendations that mention specific achievements or numbers
3. **Recent is better:** Prioritize recent recommendations (last 2-3 years)
4. **Edit for length:** If a recommendation is very long, you can summarize key points (but keep the essence)
5. **Update regularly:** Add new recommendations as you receive them

---

## 🚀 Quick Start

1. Open: `components/recommendations-section.tsx`
2. Replace the placeholder data in the `recommendations` array
3. Save the file
4. Run: `git add . && git commit -m "feat: add LinkedIn recommendations" && git push`
5. Done! Your recommendations are live! 🎉

---

**Need help?** The component is at:
`/Users/nishanth/VibeCoding/nishanth-profile/components/recommendations-section.tsx`

