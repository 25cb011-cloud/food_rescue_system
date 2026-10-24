# Food Waste Rescue System
### Rescue Food. Reduce Waste. Feed Hope.

## 1. Project Description

The **Food Waste Rescue System** is a web-based application designed to reduce food waste by connecting food providers with organizations and recipients who can collect surplus food.

Restaurants, college canteens, hostels, bakeries, and event organizers often have excess food that may otherwise be discarded. At the same time, NGOs and community organizations may need access to available food resources.

This system provides a platform where food providers can publish surplus food listings and authorized recipients can browse available food, request quantities, and coordinate collection.

The main goal is to encourage responsible food sharing, reduce avoidable food waste, and promote a more sustainable community.

## 2. Problem Statement

Food waste is a significant environmental and social problem. Many food establishments discard surplus food because they lack an efficient way to inform potential recipients about its availability.

Traditional methods of coordinating food donations can be slow, unorganized, and difficult to track.

The Food Waste Rescue System aims to address this problem by providing a centralized digital platform for listing, requesting, and tracking surplus food.

## 3. Project Objectives

- Reduce avoidable food waste.
- Connect surplus food providers with authorized recipients.
- Simplify the process of listing and requesting food.
- Improve coordination between providers and recipients.
- Track food reservations and completed collections.
- Promote awareness of food waste reduction.
- Encourage sustainable and socially responsible practices.

## 4. Proposed Solution

The proposed system allows food providers to register and publish details of surplus food, including its name, quantity, location, and collection deadline.

Recipients can browse available listings, search for suitable food, and submit collection requests.

Providers can review requests, approve or reject them, and update collection status. The application can also display statistics about recorded listings and completed collections.

The system is intended to make surplus food sharing more organized, accessible, and transparent.

## 5. Key Features

### Food Provider
- Register and manage a profile.
- Add surplus food listings.
- Specify food quantity, category, location, and pickup deadline.
- View and manage submitted listings.
- Review recipient requests.
- Update reservation and collection status.

### Recipient
- Browse available surplus food.
- Search and filter food listings.
- View food details and pickup information.
- Request an available quantity.
- Track reservation status.
- View collection history.

### Administrator
- Review user accounts and food listings.
- Monitor reservation activity.
- Manage reported listings.
- View system statistics.

*Administrator features require appropriate implementation and permissions.*

### Food Waste Impact Dashboard
- Display total food listings.
- Track completed collections.
- Show the quantity of food collected.
- Present food-sharing statistics.

Statistics should be based on recorded data or clearly labelled demonstration data.

## 6. Technology Stack

The following technologies may be used to develop the website:

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| TypeScript | Writing structured, type-safe JavaScript |
| Vite | Development server and build tool |
| Tailwind CSS | Website styling and responsive design |
| Lucide Icons | User interface icons |
| Supabase | Authentication and database services, if configured |

The final technology list should reflect the tools actually used in the implemented project.

## 7. System Requirements

- A laptop or desktop computer.
- A modern web browser.
- Node.js and npm.
- A code editor such as Visual Studio Code.
- An internet connection for installation and any cloud services.
- A Supabase account if cloud authentication and database storage are used.

## 8. Project Modules

### Module 1: User Authentication
Allows users to register, log in, and access features appropriate to their roles.

### Module 2: Food Listing Management
Allows providers to create and manage surplus food listings.

### Module 3: Food Search and Discovery
Allows recipients to browse available food and filter listings based on relevant criteria.

### Module 4: Reservation Management
Handles food requests, approval or rejection, quantity availability, and collection status.

### Module 5: User Dashboards
Provides role-specific information for food providers, recipients, and administrators.

### Module 6: Impact Tracking
Displays statistics related to food listings, reservations, and completed collections.

## 9. Installation and Setup

Follow these steps if the project uses React, TypeScript, and Vite.

### Step 1: Install prerequisites

Install Node.js from:

https://nodejs.org/

Verify the installation by opening a terminal and running:

```bash
node --version
npm --version
```

### Step 2: Open the project folder

Open the Food Waste Rescue project folder in Visual Studio Code or your preferred editor.

### Step 3: Install dependencies

Run the following command in the project directory:

```bash
npm install
```

### Step 4: Configure environment variables

If the project uses Supabase, configure the required public project URL and publishable key using the environment variable names expected by the application.

For example, a Vite application may use:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Use the actual variable names expected by your code. Never place a Supabase service-role key or other secret credentials in frontend environment variables.

If the application uses demo mode without Supabase, this configuration may not be necessary.

### Step 5: Start the development server

Run:

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

`http://localhost:5173`

The website should now be accessible in your browser.

## 10. Database Design

If Supabase is configured, the system may use the following tables.

### Profiles
Stores user profile information and role assignments.

Possible fields:
- `id`
- `full_name`
- `email`
- `role`
- `created_at`

### Food Listings
Stores information about surplus food.

Possible fields:
- `id`
- `provider_id`
- `food_name`
- `category`
- `description`
- `quantity`
- `unit`
- `pickup_location`
- `pickup_deadline`
- `status`
- `created_at`

### Reservations
Stores recipient requests for available food.

Possible fields:
- `id`
- `food_listing_id`
- `recipient_id`
- `requested_quantity`
- `status`
- `created_at`

### Notifications
Stores application notifications when this feature is implemented.

Possible fields:
- `id`
- `user_id`
- `message`
- `is_read`
- `created_at`

Appropriate relationships, validation constraints, and access policies should be configured before using real user data.

## 11. Working Procedure

The basic workflow of the system is:

1. A food provider registers and signs in.
2. The provider enters surplus food details.
3. The listing becomes visible to eligible recipients.
4. A recipient searches for available food.
5. The recipient submits a collection request.
6. The provider reviews and approves or rejects the request.
7. The system updates reservation quantities and status.
8. After collection, the authorized user marks the request as completed.
9. The completed collection contributes to the impact dashboard.

The actual workflow depends on the features implemented in the application.

## 12. Testing

The following test cases can be used to evaluate the system.

| Test case | Expected result |
|---|---|
| Submit a valid food listing | Listing is created successfully |
| Submit a listing with missing required fields | Validation error is displayed |
| Search for a food item | Matching listings are displayed |
| Request an available quantity | Reservation request is recorded |
| Request more than the available quantity | Request is rejected |
| Attempt to reserve expired food | Reservation is prevented |
| Approve or reject a request | Reservation status is updated |
| Complete a collection | Collection status is recorded |
| Open the website on a mobile device | Layout adapts to the screen |
| Attempt an unauthorized modification | Access is denied |

These are proposed tests; actual results should be recorded after testing the implemented application.

## 13. Food Safety Considerations

- Food providers should enter accurate preparation and collection information.
- Recipients should verify food condition and handling requirements.
- Food must be collected within the specified safe collection period.
- Expired listings should not accept new reservations.
- Providers and recipients must comply with applicable food-safety requirements.
- The application does not independently certify food as safe for consumption.

## 14. Future Enhancements

Potential future improvements include:

- Location-based food discovery.
- Email or SMS notifications.
- Map integration for collection locations.
- QR codes for verifying completed collections.
- More detailed food waste analytics.
- Mobile application support.
- Integration with additional community organizations.
- Improved reporting and moderation features.

## 15. Advantages

- Helps reduce avoidable food waste.
- Makes surplus food easier to discover.
- Improves coordination between providers and recipients.
- Provides a structured record of food-sharing activity.
- Encourages community participation.
- Supports environmental awareness and sustainability.

## 16. Limitations

- Successful food collection depends on provider and recipient participation.
- Food availability and pickup deadlines can change quickly.
- Real-time notifications require additional configuration.
- Secure user accounts and persistent data require a properly configured backend.
- Food safety and collection arrangements require human oversight.
- Impact statistics are only as reliable as the recorded data.

## 17. Conclusion

The Food Waste Rescue System demonstrates how web technology can help address a practical social and environmental problem.

By providing a centralized platform for listing surplus food, requesting collections, and tracking completed donations, the proposed system aims to improve coordination and encourage responsible food sharing.

With further development and participation from food providers and community organizations, the system could support efforts to reduce avoidable food waste and make surplus food available to people who need it.

## 18. Author Details

**Project Title:** Food Waste Rescue System

**Project Type:** College Mini-Project

**Developed By:** Harini K

**Department:** Computer Science and Business System

**College:** KPR Institude of Engineering and Technology

**Academic Year:** 2026-2029

---

*Note: Update the technology stack, database configuration, implemented features, and test results to match your actual project before submitting this README.*
