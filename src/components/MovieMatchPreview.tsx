import React from 'react';
import { Star, Heart, Play } from 'lucide-react';

const MovieMatchPreview = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-4 flex flex-col overflow-y-auto">
      {/* App header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Heart className="h-5 w-5 text-[#e94560] mr-2" />
          <h3 className="text-white font-semibold">MovieMatch</h3>
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Movie grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* Movie card 1 */}
        <div className="bg-[#0f3460] rounded-lg overflow-hidden">
          <div className="h-24 bg-gradient-to-br from-purple-500 to-pink-500 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="h-8 w-8 text-white opacity-80" />
            </div>
          </div>
          <div className="p-2">
            <div className="flex justify-between items-center">
              <h4 className="text-white text-xs font-medium truncate">
                Inception
              </h4>
              <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                <span className="text-white text-xs ml-1">4.8</span>
              </div>
            </div>
          </div>
        </div>

        {/* Movie card 2 */}
        <div className="bg-[#0f3460] rounded-lg overflow-hidden">
          <div className="h-24 bg-gradient-to-br from-blue-500 to-indigo-600 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="h-8 w-8 text-white opacity-80" />
            </div>
          </div>
          <div className="p-2">
            <div className="flex justify-between items-center">
              <h4 className="text-white text-xs font-medium truncate">
                La La Land
              </h4>
              <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                <span className="text-white text-xs ml-1">4.7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Movie card 3 */}
        <div className="bg-[#0f3460] rounded-lg overflow-hidden">
          <div className="h-24 bg-gradient-to-br from-green-500 to-teal-500 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="h-8 w-8 text-white opacity-80" />
            </div>
          </div>
          <div className="p-2">
            <div className="flex justify-between items-center">
              <h4 className="text-white text-xs font-medium truncate">
                Parasite
              </h4>
              <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                <span className="text-white text-xs ml-1">4.9</span>
              </div>
            </div>
          </div>
        </div>

        {/* Movie card 4 */}
        <div className="bg-[#0f3460] rounded-lg overflow-hidden">
          <div className="h-24 bg-gradient-to-br from-red-500 to-orange-500 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="h-8 w-8 text-white opacity-80" />
            </div>
          </div>
          <div className="p-2">
            <div className="flex justify-between items-center">
              <h4 className="text-white text-xs font-medium truncate">
                Interstellar
              </h4>
              <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                <span className="text-white text-xs ml-1">4.9</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation section */}
      <div className="bg-[#0f3460] rounded-lg p-3 mt-auto">
        <h4 className="text-[#e94560] font-medium text-sm mb-2">
          Weekend Recommendation
        </h4>
        <div className="flex items-center">
          <div className="w-12 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded mr-3 flex items-center justify-center">
            <Play className="h-5 w-5 text-white" />
          </div>
          <div>
            <h5 className="text-white text-xs font-medium">
              The Grand Budapest Hotel
            </h5>
            <div className="flex items-center mt-1">
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
            </div>
            <p className="text-gray-400 text-xs mt-1">
              Perfect for your tastes!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieMatchPreview;
