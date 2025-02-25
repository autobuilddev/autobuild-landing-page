import React from 'react';
import {
  Calendar,
  ShoppingCart,
  Check,
  ChevronRight,
  Utensils,
} from 'lucide-react';

const MealPlannerPreview = () => {
  return (
    <div className="w-full h-full bg-white p-4 flex flex-col overflow-y-auto">
      {/* App header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Utensils className="h-5 w-5 text-teal-500 mr-2" />
          <h3 className="text-gray-800 font-semibold">Meal Planner Pro</h3>
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Weekly meal plan */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4 border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-teal-600 mr-2" />
            <h4 className="text-gray-800 font-medium text-sm">Weekly Plan</h4>
          </div>
          <span className="text-xs text-gray-500">May 15-21</span>
        </div>

        {/* Days */}
        <div className="space-y-2">
          {/* Monday */}
          <div className="flex items-center">
            <div className="w-16 text-xs font-medium text-gray-500">Mon</div>
            <div className="flex-1 bg-white rounded-md p-2 border border-gray-200 flex items-center">
              <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-2">
                <span className="text-xs text-teal-600">B</span>
              </div>
              <span className="text-xs text-gray-700">Avocado Toast</span>
            </div>
          </div>

          {/* Tuesday */}
          <div className="flex items-center">
            <div className="w-16 text-xs font-medium text-gray-500">Tue</div>
            <div className="flex-1 bg-white rounded-md p-2 border border-gray-200 flex items-center">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-2">
                <span className="text-xs text-orange-600">L</span>
              </div>
              <span className="text-xs text-gray-700">Quinoa Salad</span>
            </div>
          </div>

          {/* Wednesday */}
          <div className="flex items-center">
            <div className="w-16 text-xs font-medium text-gray-500">Wed</div>
            <div className="flex-1 bg-white rounded-md p-2 border border-gray-200 flex items-center">
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                <span className="text-xs text-indigo-600">D</span>
              </div>
              <span className="text-xs text-gray-700">Grilled Salmon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grocery list */}
      <div className="bg-gray-50 rounded-lg p-3 mt-auto border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <ShoppingCart className="h-4 w-4 text-orange-500 mr-2" />
            <h4 className="text-gray-800 font-medium text-sm">Grocery List</h4>
          </div>
          <span className="text-xs text-teal-600 font-medium">8 items</span>
        </div>

        {/* List items */}
        <div className="space-y-2">
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full border border-teal-500 flex items-center justify-center mr-2">
              <Check className="h-3 w-3 text-teal-500" />
            </div>
            <span className="text-xs text-gray-700">2 Avocados</span>
          </div>

          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full border border-teal-500 flex items-center justify-center mr-2">
              <Check className="h-3 w-3 text-teal-500" />
            </div>
            <span className="text-xs text-gray-700">Whole grain bread</span>
          </div>

          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full border border-teal-500 flex items-center justify-center mr-2">
              <Check className="h-3 w-3 text-teal-500" />
            </div>
            <span className="text-xs text-gray-700">1 lb Salmon</span>
          </div>

          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-2"></div>
            <span className="text-xs text-gray-700">Quinoa (1 cup)</span>
          </div>

          <div className="flex items-center justify-center mt-2">
            <span className="text-xs text-teal-600 flex items-center">
              View all items
              <ChevronRight className="h-3 w-3 ml-1" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlannerPreview;
